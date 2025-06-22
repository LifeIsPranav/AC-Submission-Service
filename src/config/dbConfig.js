const mongoose = require('mongoose')
const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig')

async function connectDB() {
  try{
    console.log("Connecting to DB...")
    if(NODE_ENV == 'development')
    await mongoose.connect(ATLAS_DB_URL)

    console.log("Connected to DB 🔥")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB