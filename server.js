const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = 3000;
const basePath = path.join(__dirname);

const server = http.createServer((req, res) => {
    let filePath = path.join(basePath, req.url === '/' ? 'index.html' : req.url);
    let ext = path.extname(filePath).toLowerCase();
    console.log(req.url);
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.mjs': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
    };

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Archivo no encontrado');
            return; 
        }
        res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'text/plain', 'Access-Control-Allow-Origin': '*'});
        res.end(content);
        });
    });
     server.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
});