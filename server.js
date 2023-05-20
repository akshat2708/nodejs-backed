import http from "http";
import exp from './export';
console.log(exp);

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home')
    }
    else if (req.url === '/about') {
        res.end('about')
    }
    else {
        res.end('error')
    }

});
server.listen(5000, () => {
    console.log("server is working");
});


