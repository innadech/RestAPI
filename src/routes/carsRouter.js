import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
} from '../controllers/carsController.js'

const carsRouter = express.Router()

// GET all
carsRouter.get('/', handleGetAll)

// GET by ID
carsRouter.get('/:id', handleGetById)

// DELETE
carsRouter.delete('/:id', handleDeleteById)

// POST
carsRouter.post('/', handleAdd)

// PUT (частичное обновление)
carsRouter.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `PUT (replace) item ${id}` })
})

// PATCH (полное обновление)
carsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: `PATCH (update) item ${id}` })
})

export default carsRouter
