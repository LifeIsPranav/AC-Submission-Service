const { fetchProblemDetails } = require('../apis/problemAdminApi')
const SubmissionProducer = require('../producers/submissionQueueProducer')

class submissionService {

  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository
  }

  async pingCheck() {
    return 'poooooooooong'
  }

  async addSubmission(submissionPayload) {

    const problemId = submissionPayload.problemId
    const problemAdminApiResponse = await fetchProblemDetails(problemId)

    if(!problemAdminApiResponse) {
      throw { message: "Not able to create Submission" }
    }
    
    // console.log(problemAdminApiResponse.data.codeStubs)
    // console.log(submissionPayload)
    const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() == submissionPayload.language.toLowerCase())

    submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n"  + languageCodeStub.endSnippet
    // console.log(submissionPayload.code)

    const submission = await this.submissionRepository.createSubmission(submissionPayload)
    if(!submission) throw { message: "Not able to create Submission" }
    const response = await SubmissionProducer({
      [submission._id]: {
        code: submissionPayload.code,
        language: submissionPayload.language,
        inputCase: problemAdminApiResponse.data.testCases[0].input,
        outputCase: problemAdminApiResponse.data.testCases[0].output
      }
    })
    return { queueResponse: response , submission }
  }
  
}


module.exports = submissionService