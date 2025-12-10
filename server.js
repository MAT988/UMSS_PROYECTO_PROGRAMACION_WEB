import http from 'http';
import https from 'https';
import spdy from 'spdy';
import fs from 'fs';
import path from 'path';
import http2 from 'http2';
import {fileURLToPath} from 'url';
import { PORT } from './src/config/env.config.js'; 
import { connectDatabase } from './src/config/database.config.js';
import app from './src/config/server.config.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost.crt')),
  allowHTTP1: true,
};
connectDatabase();
http.createServer(app).listen(PORT, () => {
  console.log(`Servidor http en http://localhost:${PORT}`);
});

//https.createServer(httpsOptions, app).listen(PORT);
//console.info(`Server running on https://localhost:${PORT}`);
//spdy.createServer(httpsOptions, app).listen(PORT);
//console.log(`Servidor HTTP/2 activo en https://localhost:${PORT}`);
