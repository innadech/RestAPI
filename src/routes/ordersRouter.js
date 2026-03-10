import express from 'express'
import {
  handleAdd,
  handleDeleteById,
  handleGetAll,
  handleGetById,
  handleUpdateById,
} from '../controllers/ordersController.js'

const ordersRouter = express.Router()

ordersRouter.get('/', handleGetAll)
ordersRouter.get('/:id', handleGetById)
ordersRouter.delete('/:id', handleDeleteById)
ordersRouter.post('/', handleAdd)
ordersRouter.put('/:id', handleUpdateById)
ordersRouter.patch('/:id', handleUpdateById)

export default ordersRouter
