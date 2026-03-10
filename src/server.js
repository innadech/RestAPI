import cors from 'cors'
import path from 'node:path'
import express from 'express'
import cookieParser from 'cookie-parser'
import ordersRouter from './routes/ordersRouter.js'
import productsRouter from './routes/productsRouter.js'

const app = express()
const PORT = 3000
const schemasPath = path.join(import.meta.dirname, 'schemas')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v0/orders', ordersRouter)
app.use('/api/v0/products', productsRouter)

app.use('/api/v0/schemas', express.static(schemasPath))
app.use('/{*any}', (req, res) => res.status(404).send('not-found'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
