var http = require('http');
http.createServer(function(request,response){
response.writeHead(200,{'contentType':'text/plain'})
response.end('你好世界\n')
}).listen(8888)
console.log('http://127.0.0.1:8888')