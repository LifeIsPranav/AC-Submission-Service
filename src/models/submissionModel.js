const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  problemId: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
    default: "Pending"
  }
})

const Submission = mongoose.model('Submission', submissionSchema)
module.exports = Submission