import {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
} from '../models/product.js'

export function handleGetAll(req, res) {
  const products = getAll()
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(products)
}

export function handleGetById(req, res) {
  const { id } = req.params
  const product = getById(id)
  if (!product) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(product)
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
  const product = add(body)
  if (!product) {
    res.status(400).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(201).send(product)
  }
}

export function handleUpdateById(req, res) {
  const { id } = req.params
  const { body } = req
  const product = updateById(id, body)
  if (!product) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(product)
  }
}
