var http = require("http");

function readHTML (url, print) {
  var requestOptions = {
    host: url,
    path: "/"
    };

  var body = "";

  http.get(requestOptions, (response) => {    // HTTP Response Callback
    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", function(data) {      // On Data Received
      body += data;
    });

    response.on("end", function () {
      print(body);
    });
  });
}

function printHTML (htmlData){
  console.log(htmlData);
}

readHTML("www.example.com", printHTML)

