const http = require('http');

http.createServer((req,resp)=>{
    resp.write("hrlloo");
    resp.end();
}).listen(4500);

