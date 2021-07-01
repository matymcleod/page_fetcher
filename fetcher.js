const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2);

request(args[0], (err, request, body) => {
  if(err) {
    throw new Error ("Sorry dude, somthing went wrong with your request");
  }

  fs.writeFile(args[1], body, (error) => {
    if (error) {
      throw new Error("Sorry man but something went wrong wth the page youre trying to receive");
    }
    console.log(`Downloaded the following content: ${request ['headers']['content-length']} to ${args[1]}`);
  });
});
