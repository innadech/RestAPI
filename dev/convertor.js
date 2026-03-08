const carsSource = [
  {
    id: '69a389efcb158c1dbf549a3f',
    brand: 'Tesla',
    price: 42000,
  },
  {
    id: '69a8ec0d6c24683ab3ce1d7a',
    brand: 'Ferrari',
    price: 77000,
  },
  {
    id: '69a8ec1b5db210daf9389c78',
    brand: 'Audi',
    price: 33000,
  },
]

const cars = carsSource.map(car => ({ car }))
const obj = { cars }

console.dir(obj, { depth: 3 })

const expectedArr = [
  {
    car: {
      brand: 'Audi',
      price: 33000,
    },
  },
  {
    car: {
      brand: 'Audi',
      price: 33000,
    },
  },
  {
    car: {
      brand: 'Audi',
      price: 33000,
    },
  },
]
