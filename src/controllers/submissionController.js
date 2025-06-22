async function pingRequest(req, res) {

  console.log("**************--------************")
  console.log(this.testService)
  console.log("**************--------************")

  const response = await this.testService.pingCheck()
  return { data: response }
}

// Todo: add validation Layer
async function createSubmission(req, res) {
  const response = await this.submissionService.addSubmission(req.body)
  return res.status(201).send({
    error: {},
    data: response,
    success: true,
    message: 'Created Submission successfully'
  })
}

module.exports = {
  pingRequest,
  createSubmission
}