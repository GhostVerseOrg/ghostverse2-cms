// This is a small utility to generate the keys for the new instance.
const crypto = require('crypto')

console.log("the following are APP_KEYS, API_TOKEN_SALT, TRANSFER_TOKEN_SALT, ADMIN_JWT_SECRET, JWT_SECRET")

let appKeys1 = crypto.randomBytes(16).toString('base64')
let appKeys2 = crypto.randomBytes(16).toString('base64')
let appKeys3 = crypto.randomBytes(16).toString('base64')
let appKeys4 = crypto.randomBytes(16).toString('base64')
console.log("APP_KEYS="+appKeys1+","+appKeys2+","+appKeys3+","+appKeys4)

let apiTokenSalt = crypto.randomBytes(16).toString('base64')
console.log("API_TOKEN_SALT="+apiTokenSalt)

let transferTokenSalt = crypto.randomBytes(16).toString('base64')
console.log("TRANSFER_TOKEN_SALT="+transferTokenSalt)

let adminJwtSecret = crypto.randomBytes(16).toString('base64')
console.log("ADMIN_JWT_SECRET="+adminJwtSecret)

let jwtSecret = crypto.randomBytes(16).toString('base64')
console.log("JWT_SECRET="+jwtSecret)
