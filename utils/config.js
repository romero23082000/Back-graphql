require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.URL
const SECRET = process.env.SECRET


module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}