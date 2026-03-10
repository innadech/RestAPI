import convertor from '../utils/convertor.js'
import carsCollection from '../collections/carsCollection.js'

export function getAll() {
  const cars = carsCollection.map(({ id, ...car }) => ({
    car: { $: { id }, ...car },
  }))
  const json = { cars }
  return convertor(json, 'carsSchema')
}

export function getById(carId) {
  const { id, ...car } = carsCollection.find(car => car.id === carId) ?? {}
  if (!id) return null
  const json = { car: { $: { id }, ...car } }
  return convertor(json, 'carSchema')
}

export function deleteById(id) {
  const carIdx = carsCollection.findIndex(car => car.id === id)
  if (carIdx > -1) {
    carsCollection.splice(carIdx, 1)
    return true
  }
  return false
}

export function add(dto) {
  const createdCar = create(dto)
  carsCollection.push(createdCar)
  const { id, ...car } = createdCar
  const json = { car: { $: { id }, ...car } }
  return convertor(json, 'carSchema')
}

function create(dto) {
  // console.log('dto', dto)
  return { id: Math.random().toString(), ...dto }
}

export function updateById(carId, dto) {
  const findedCar = carsCollection.find(car => car.id === carId)
  if (!findedCar) return null
  Object.assign(findedCar, dto)
  const { id, ...car } = findedCar
  const json = { car: { $: { id }, ...car } }
  return convertor(json, 'carSchema')
}
