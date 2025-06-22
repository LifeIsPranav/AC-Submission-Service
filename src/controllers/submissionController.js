async function pingRequest(req, res) {

  console.log("**************--------************")
  console.log(this.testService)
  console.log("**************--------************")

  const response = await this.testService.pingCheck()
  return { data: response }
}

async function createSubmission(req, res) {

}

module.exports = {
  pingRequest,
  createSubmission
}