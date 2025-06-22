const SubmissionProducer = require('../producers/submissionQueueProducer')

class submissionService {

  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository
  }

  async pingCheck() {
    return 'poooooooooong'
  }

  async addSubmission(submission) {
    const submission = this.submissionRepository.createSubmission(submission)
    if(!submission) throw { message: "Not able to create Submission" }
    const response = await SubmissionProducer(submission)
    return { queueResponse: response , submission }
  }
  
}


module.exports = submissionService