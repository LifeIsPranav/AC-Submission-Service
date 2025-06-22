async function pingRequest(req, res) {

  console.log("**************--------************")
  console.log(this.testService)
  console.log("**************--------************")

  const response = await this.testService.pingCheck()
  return { data: response }
}

async function createSubmission(req, res) {
  const response = await this.submissionService.addSubmission(req.body)
}

module.exports = {
  pingRequest,
  createSubmission
}