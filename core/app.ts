import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/test', (req: Request, res: Response) => {
  const message = 'Hello World'
  res.json({ message, method: req.method, status: res.statusCode })
})

app.get('/', (req: Request, res: Response) => {
  res.statusMessage = 'Running'
  res.status(200).json({ message: 'Server is running', status: res.statusCode, statusMessage: res.statusMessage })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})
