import mongoose from 'mongoose'

const MONGO_URI =
  'mongodb+srv://dechevaiv_db_user:Ft8DovncMUlZf1tk@cluster0.zxtkvwh.mongodb.net/megashop'

await mongoose.connect(MONGO_URI)

const dbConnection = mongoose.connection.db

export default dbConnection
