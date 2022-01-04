const http = require('http');
const { URL } = require('url');
const path = require('path');
const fs = require('fs')

function getStaticPath() {
    return path.join(__dirname, 'static')
}

function creatServer(port) {

    const server = http.createServer();

    server.on('request', (req, res) => {
        let { url } = req;
        // const reqURL = new URL(url, 'http://localhost/');
        // const { pathname } = reqURL;
        if (url === '/') {
            url = '/index.html'
        }
        let filePath = path.join(getStaticPath(), url)

        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })

            if (err) {
                return res.end('<html>404</html>')
            }

            res.end(data)

        })

    })

    server.listen(port);
    console.log('启动成功:', port)
}



creatServer(8080);

creatServer(8081);

