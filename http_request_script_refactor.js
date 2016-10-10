var request = require("request");

function readHTML (url, print) {
  request(url, function(err, response, body) {
    if (err) {
      throw err;
    }
  print(body);
  });
}

function printHTML (htmlData){
  console.log(htmlData);
}

readHTML("http://www.example.com", printHTML)
