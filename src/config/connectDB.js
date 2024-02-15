import mongoose from 'mongoose'
import 'dotenv/config'

const connectDB = async () => {

  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('Connected to DB successfully')
  } catch (error) {
    console.log('Error while connecting to DB')
  }
}

export default connectDB;