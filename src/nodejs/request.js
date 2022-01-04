const http = require('http');

function post() {
    const option = {
        //host: 'localhost:8000',//域名+端口
        hostname: 'localhost',//域名
        //protocol:'http',//协议，默认http
        method: 'GET',
        port: 8000,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = http.request(option, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    })
    //请求body
    req.write(JSON.stringify({name:'abc'}))
    //必须加end
    req.end();

}


function get() {
    //此方法与 http.request() 的唯一区别在于，它将方法设置为 GET 并自动调用 req.end()。
    http.get('http://localhost:8000/', (res) => {
        const { statusCode } = res;
        console.log('statusCode', statusCode)

        if (statusCode !== 200) {
            res.resume();
            return
        }


        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });

        res.on('end', () => {
            try {
                //const parsedData = JSON.parse(rawData);
                console.log(rawData);
            } catch (e) {
                console.error(e.message);
            }
        });
    })
}



post();