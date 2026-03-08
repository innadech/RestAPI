import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
  handleUpdateById,
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
carsRouter.put('/:id', handleUpdateById)

// PATCH (полное обновление)
carsRouter.patch('/:id', handleUpdateById)

export default carsRouter
