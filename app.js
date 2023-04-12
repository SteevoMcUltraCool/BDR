const http = require("http")
const fs = require("fs")
const port = 6969
const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile("./Webpage/index.html",function(error,data){
        if (error){
        res.writeHead(404)
        res.write("File not found")
        }else{
        res.write(data)
        }
        res.end()
    })

})
server.listen(port, function(error){
    console.log(error|| "All good on port " + port)
})

