const SubmissionProducer = require('../producers/submissionQueueProducer')

class submissionService {

  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository
  }

  async pingCheck() {
    return 'poooooooooong'
  }

  async addSubmission(submissionPayload) {
    const submission = await this.submissionRepository.createSubmission(submissionPayload)
    if(!submission) throw { message: "Not able to create Submission" }
    const response = await SubmissionProducer(submission)
    return { queueResponse: response , submission }
  }
  
}


module.exports = submissionService