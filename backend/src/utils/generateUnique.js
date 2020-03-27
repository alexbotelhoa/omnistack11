const crypto = require('crypto');

module.exports = function generateUnique() {
   return crypto.randomBytes(4).toString('HEX');;
}