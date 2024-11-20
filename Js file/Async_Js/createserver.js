// create server____________
// http module______________

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("Request has been made from browser to server");
    // request object_______
    // console.log(req.method); 
    // console.log(req.url);

    // res.setHeader('content-type', 'text/html');
    // res.write("<h1>Hello world</h1>");
    // res.end();
    let path;

    switch (req.url) {
        case "/":
            path = "index.html"
            res.statusCode = 200
            break;
        case "/about":
            path = "about.html"
            res.statusCode = 202
            break;
       
        default:
            path = "404.html"
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err, fileData) => {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(res.statusCode, { 'Content-Type': 'text/html' });
            res.write(fileData);
            // res.write(req.url);
            res.end();
        }
    })

})

// Server is listening on given port number, host and callback function________________

server.listen(3000, 'localhost', () => {
    console.log("Server is listening");
})