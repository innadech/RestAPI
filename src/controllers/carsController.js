import { add, deleteById, getAll, getById } from '../models/car.js'

export function handleGetAll(req, res) {
  const cars = getAll()
  res.setHeader('Content-Type', 'application/xml')
  res.send(cars)
}

export function handleGetById(req, res) {
  const { id } = req.params
  console.log(id)
  const car = getById(id)
  if (!car) {
    res.status(404).send()
  } else {
    res.setHeader('Content-Type', 'application/xml')
    res.send(car)
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
  // console.log('body :>> ', body)
  const car = add(body)
  if (!car) {
    res.status(400).send()
  } else {
    res.status(201).send(car)
  }
}
