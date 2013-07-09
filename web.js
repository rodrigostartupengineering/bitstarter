var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var fs = require('fs');
   // var bData = new Buffer(256);
    var content;
    fs.readFile('./index.html', function(err, data){
	if(err) throw err;
	//bData.write(data, "utf-8");
	content = data;
    });	

    response.send(content);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
