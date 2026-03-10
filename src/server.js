import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import ordersRouter from './routes/ordersRouter.js'
import productsRouter from './routes/productsRouter.js'

const app = express()
const PORT = 3000

// --- Middleware ---
app.use(cors()) // Разрешает кросс-доменные запросы
app.use(cookieParser()) // Парсит куки в req.cookies
app.use(express.json()) // Body-parser для JSON
app.use(express.urlencoded({ extended: true })) // Body-parser для форм

// --- Роуты ---

app.use('/api/v0/orders', ordersRouter)
app.use('/api/v0/products', productsRouter)

app.use('/{*any}', (req, res) => res.status(404).send('not-found'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
