import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
  handleUpdateById,
} from '../controllers/productsController.js'

const productsRouter = express.Router()

// GET all
productsRouter.get('/', handleGetAll)

// GET by ID
productsRouter.get('/:id', handleGetById)

// DELETE
productsRouter.delete('/:id', handleDeleteById)

// POST
productsRouter.post('/', handleAdd)

// PUT (частичное обновление)
productsRouter.put('/:id', handleUpdateById)

// PATCH (полное обновление)
productsRouter.patch('/:id', handleUpdateById)

export default productsRouter
