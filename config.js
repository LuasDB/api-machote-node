import 'dotenv/config'

export default {
  port:process.env.PORT || 3000,
  mongoURI:process.env.MONGO_URI,
  database:process.env.MONGO_DATABASE
}
