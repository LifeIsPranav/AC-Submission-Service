const SubmissionProducer = require('../producers/submissionQueueProducer')

class submissionService {

  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository
  }

  async pingCheck() {
    return 'poooooooooong'
  }

  async addSubmission(submission) {
    const response = await SubmissionProducer(submission)
    return response
  }
  
}


module.exports = submissionService