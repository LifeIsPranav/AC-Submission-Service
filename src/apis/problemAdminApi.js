const axiosInstance = require("../config/axiosInstance")
const { PROBLEM_ADMIN_SERVICE_URL } = require("../config/serverConfig")

const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1/problems`

async function fetchProblemDetails(problemId) {
  try {
    const uri = PROBLEM_ADMIN_API_URL + `/${problemId}`
    const response = await axiosInstance.get(uri)
    // console.log('Api response: ', response.data)
    return response.data

  } catch (error) {
    console.log('Something went wrong while fetching problem Details')
    console.log(error)
  }
}

module.exports = {
  fetchProblemDetails
}