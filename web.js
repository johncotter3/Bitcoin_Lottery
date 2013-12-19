var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
//var app = express();

var buf = new Buffer(256);

app.get('/', function(request, response) {
    var content = fs.readFileSync('index.html')
    var buf = new Buffer(content, 'utf-8');
    response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
