import {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
} from '../models/order.js'

export function handleGetAll(req, res) {
  const orders = getAll()
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(orders)
}

export function handleGetById(req, res) {
  const { id } = req.params
  const order = getById(id)
  if (!order) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(order)
  }
}

export function handleDeleteById(req, res) {
  const { id } = req.params
  const isSucessfullyDeleted = deleteById(id)
  if (!isSucessfullyDeleted) {
    res.status(404).send()
  } else {
    res.status(204).send()
  }
}

export function handleAdd(req, res) {
  const { body } = req
  const order = add(body)
  if (!order) {
    res.status(400).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(201).send(order)
  }
}

export function handleUpdateById(req, res) {
  const { id } = req.params
  const { body } = req
  const order = updateById(id, body)
  if (!order) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(order)
  }
}
