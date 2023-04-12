const express = require("express")
const server = express()
const URL = require("url")
const fs = require("fs")
const port = 6969
server.use("/",(req,res)=>{
    var url = URL.parse(req.url);
    if (url.pathname=="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        url.pathname="/index.html"
    } else{
        res.writeHead(200,{'Content-Type':req.rawHeaders[13]})

    }
    fs.readFile("./Webpage" +url.pathname,function(error,data){
        if (error){
        res.writeHead(404)
        res.write("File not found: "+url.pathname)
        }else{
        res.write(data)
        }
        res.end()
    })
})
server.listen(port, function(error){
    console.log(error|| "All good on port " + port)
})

/*const http = require("http")
const URL = require("url")
const fs = require("fs")
const webSocket = require("websocket")
const port = 6969
const server = http.createServer(function(req,res){
    var url = URL.parse(req.url);
    res.writeHead(200,{'Content-Type':'text/html'})
    if (url.pathname=="/"){
        url.pathname="/index.html"
    } 
    fs.readFile("./Webpage" +url.pathname,function(error,data){
        if (error){
        res.writeHead(404)
        res.write("File not found: "+url.pathname)
        }else{
        res.write(data)
        }
        res.end()
    })

})
server.listen(port, '127.0.0.1', function(error){
    console.log(error|| "All good on port " + port)
})




// create the server

let wsServer = new webSocket.server({

    httpServer: server
 
 });
 
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    console.log(request)
    connection.on('message', function(message) {
        if (message.type === 'utf8') {

        }
    });
    connection.on('close', function(connection) {
    });
 });
 */