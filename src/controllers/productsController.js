import {
  add,
  deleteById,
  getAll,
  getById,
  updateById,
} from '../models/product.js'

export async function handleGetAll(req, res) {
  const products = await getAll()
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(products)
}

export async function handleGetById(req, res) {
  const { id } = req.params
  const product = await getById(id)
  if (!product) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(product)
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
  const product = await add(body)
  if (!product) {
    res.status(400).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(201).send(product)
  }
}

export async function handleUpdateById(req, res) {
  const { id } = req.params
  const { body } = req
  const product = await updateById(id, body)
  if (!product) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(product)
  }
}
