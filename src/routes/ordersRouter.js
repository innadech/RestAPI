import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
  handleUpdateById,
} from '../controllers/ordersController.js'

const ordersRouter = express.Router()

// GET all
ordersRouter.get('/', handleGetAll)

// GET by ID
ordersRouter.get('/:id', handleGetById)

// DELETE
ordersRouter.delete('/:id', handleDeleteById)

// POST
ordersRouter.post('/', handleAdd)

// PUT (частичное обновление)
ordersRouter.put('/:id', handleUpdateById)

// PATCH (полное обновление)
ordersRouter.patch('/:id', handleUpdateById)

export default ordersRouter
