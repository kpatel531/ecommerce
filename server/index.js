import express, { request, response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8080 || process.env.PORT

app.get("/", (request,response) => {
    response.json({
        message: "Server is running on " + PORT
    })
})

app.use('/api/user', userRouter)

connectDB()

const server = app.listen(PORT, () => {
    console.log(`Server is running on:. http://localhost:${PORT}`);
})

process.on('SIGINT', () => {
    console.log('SIGINT signal received. Closing server.');
    server.close(() => {
      console.error('Server closed. Exiting process.');
      process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received. Closing server.');
    server.close(() => {
        console.error('Server closed. Exiting process.');
        process.exit(0);
    });
});