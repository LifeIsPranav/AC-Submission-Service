class testService {

  constructor(inp) {
    // Inject Here
    console.log("Consructor of testService Called!")
    console.log(inp)
  }

  async pingCheck() {
    return 'poooooooooong'
  }
  
}


module.exports = testService