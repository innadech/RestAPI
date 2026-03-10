import {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
} from '../models/order.js'

export async function handleGetAll(req, res) {
  const orders = await getAll()
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(orders)
}

export async function handleGetById(req, res) {
  const { id } = req.params
  const order = await getById(id)
  if (!order) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(order)
  }
}

export async function handleDeleteById(req, res) {
  const { id } = req.params
  const isSucessfullyDeleted = await deleteById(id)
  if (!isSucessfullyDeleted) {
    res.status(404).send()
  } else {
    res.status(204).send()
  }
}

export async function handleAdd(req, res) {
  const { body } = req
  const order = await add(body)
  if (!order) {
    res.status(400).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(201).send(order)
  }
}

export async function handleUpdateById(req, res) {
  const { id } = req.params
  const { body } = req
  const order = await updateById(id, body)
  if (!order) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(order)
  }
}
