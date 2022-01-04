const http = require('http');
const server = http.createServer();
const { URL } = require('url');
const fs = require('fs');
const path = require('path')


const CONTENT_TYPES_CONFIG = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png'
};


const staticPath = path.join(__dirname, 'static');
const errorHtml = '<html>404</html>'

server.on('request', (req, res) => {
    //处理响应头
    const reqURL = new URL(req.url, 'http://localhost/8080');
    const { pathname } = reqURL;
    let suffixName = pathname.split('.').pop().toLowerCase();
    let ContentType = CONTENT_TYPES_CONFIG[suffixName];

    res.statusCode = 200
    res.setHeader({
        'Content-Type': ContentType || CONTENT_TYPES_CONFIG['html']
    });

    if (!ContentType) {
        res.end(errorHtml);
    } else {

        fs.readFile(path.join(staticPath, pathname), (err, data) => {
            if (err) {
                res.end(errorHtml)
            }
            res.end(data);
        });
    }

})

server.listen(8080);
console.log("启动服务器：8080")