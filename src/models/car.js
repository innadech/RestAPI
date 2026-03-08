import convertor from '../utils/convertor.js'
import carsCollection from '../collections/carsCollection.js'

export function getAll() {
  const cars = carsCollection.map(car => ({ car }))
  const json = { cars }
  return convertor(json, 'carsSchema')
}

export function getById(id) {
  const car = carsCollection.find(car => car.id === id)
  if (!car) return null
  const json = { car }
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
  const car = create(dto)
  carsCollection.push(car)
  const json = { car }
  return convertor(json, 'carSchema')
}

function create(dto) {
  // console.log('dto', dto)
  return { id: Math.random().toString(), ...dto }
}
