import express from 'express'
import "dotenv/config"
import cookieParser from "cookie-parser" // to ise on protect route middleware

import authRoutes from "./routes/auth.route.js"
import { connectDB } from './lib/db.js'

const app = express()
const PORT = process.env.PORT || 50001

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
})
