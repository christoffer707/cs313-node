var http = require('http');
var url = require('url');

function errorResponse(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Page Not Found");
	
}
http.createServer(function onRequest(request, response){
	if ( request.url == "/home"){
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("<h1>Hello World<h1>");
	}
	else if (request.url == "/getData"){
		response.writeHead(200, {"Content-Type":"text/json"});
		var object = {"name":"Christoffer Hemming","class":"cs313"};
		response.write(JSON.stringify(object));
	}
	else{
		errorResponse(response);
	}
	response.end();
}).listen(8888);



