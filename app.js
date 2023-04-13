const express = require("express")
const server = express()
const URL = require("url")
const fs = require("fs")
const port = 6969
server.use("/",(req,res)=>{
    var url = URL.parse(req.url);
    console.log("Index path: "+ url.pathname)

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
    console.log(error|| "All good on port " + port + "\n http://localhost:6969")
})