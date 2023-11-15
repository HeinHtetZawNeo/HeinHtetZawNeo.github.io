//Create a web server that's going to send a response of big image to any client that sends a request to your specified server:port. 

const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
    fs.createReadStream(path.join(__dirname, 'myImg.jpg')).pipe(res);
}).listen(3000);