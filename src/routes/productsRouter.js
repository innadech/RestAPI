import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
  handleUpdateById,
} from '../controllers/productsController.js'

const productsRouter = express.Router()

productsRouter.get('/', handleGetAll)
productsRouter.get('/:id', handleGetById)
productsRouter.delete('/:id', handleDeleteById)
productsRouter.post('/', handleAdd)
productsRouter.put('/:id', handleUpdateById)
productsRouter.patch('/:id', handleUpdateById)

export default productsRouter
