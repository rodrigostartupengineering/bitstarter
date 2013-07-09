var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

    var fs = require('fs');
    var bData = new Buffer(256);

    fs.readFile('./index.html', function(err, data){
	if(err) throw err;
	bData.write(data, "utf-8");
    });	

    response.send(bData.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
