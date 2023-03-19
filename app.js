const http = require("http");
const hostname = "127.0.0.1"
const port = 3000;
const secret = 'mySecretKey';

function checkSecret(userSecret) {
  return userSecret === secret;
}

if (checkSecret('mySecretKey')) {
  console.log('Access granted.');
} else {
  console.log('Access denied.');
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
});

server.listen(port, hostname, () => {})
