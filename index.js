const path = require('path');
const platform = process.platform === 'win32' ? 'win' : 'mac'
const ext = platform === 'win' ? '.exe' : ''

module.exports = path.join(__dirname, platform, `exiftool${ext}`);
