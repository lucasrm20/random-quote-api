const fs    = require('fs');
const path  = require('path');

const LOG_FILE_PATH = path.join(__dirname, '../..', 'access.log');

const logStream = fs.createWriteStream(LOG_FILE_PATH, {
  flags: 'a'
});

module.exports = logStream;
