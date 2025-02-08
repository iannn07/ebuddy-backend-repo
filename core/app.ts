import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import userRoutes from '../routes/userRoutes'

dotenv.config()

const app: Application = express()
const PORT = process.env.EXPRESS_PORT || 3000

app.use(express.json())

// ! Service Health Check
app.get('/', (req: Request, res: Response) => {
  res.statusMessage = 'Running'
  res.status(200).json({
    message: 'Server is running',
    status: res.statusCode,
    statusMessage: res.statusMessage,
  })
})

// * API Routes
app.use('/api', userRoutes)

// * Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})
