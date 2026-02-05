import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import { connectDB } from './db/connectDB.js'

dotenv.config()

const app = express()
app.use(express.json())
connectDB()

app.use("/user", userRoute)



app.listen(PORT, () => {
    console.log("Server connected on port", PORT)
})