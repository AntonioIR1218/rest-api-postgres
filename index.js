require('dotenv').config();

const server = require('./server');
const PORT = process.envPORT || 3300;

server.listen(PORT, () => console.log(`Serveris live at localhost:${PORT}`));
