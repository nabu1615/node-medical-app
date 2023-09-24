import http from 'http';

const server = http.createServer((req, res) => {
    const { url, method } = req

    res.writeHead(200, {
        "content-type": "text/plain; charset=utf8"
    })
    res.end();
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
})