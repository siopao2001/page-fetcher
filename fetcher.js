const fs = require('fs')
const request = require('request')

let variables = process.argv.slice(2)
let url = variables[0]
let fileName = variables[1]

request(url, (error, response, body) => {
   console.log('error:', error);
    fs.writeFile(fileName, body, (err) => {
     if (err) {
    console.log(err)
} else {
   fs.stat(fileName, (err, stats) => {
      console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`)
   })
  }
 })
});




