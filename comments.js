// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. The comments.html file should be in the same directory as the comments.js file. The comments.html file should have the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//         }
//         h1 {
//             color: #333;
//         }
//         p {
//             color: #666;
//         }
//     </style>
// </head>
// <body>
//     <h1>Comments</h1>
//     <p>This is the comments section.</p>
// </body>
// </html>

// Solution
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./comments.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});