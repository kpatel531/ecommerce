import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGODB_URI) {
    throw new Error(
        "Please provide mongodb uri in .env file to connect dataservice."
    )
}

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Db connected successfully")
    } catch (error) {
        console.log("Mongodb connect error", error)
        process.exit(1)
    }
}

export default connectDB