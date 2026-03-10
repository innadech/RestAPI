import convertor from '../utils/convertor.js'
import productsCollection from '../collections/productsCollection.js'

export function getAll() {
  const products = productsCollection.map(({ id, ...product }) => ({
    product: { $: { id }, ...product },
  }))
  const json = { products }
  return convertor(json, 'productsSchema')
}

export function getById(productId) {
  const { id, ...product } =
    productsCollection.find(product => product.id === productId) ?? {}
  if (!id) return null
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}

export function deleteById(id) {
  const productIdx = productsCollection.findIndex(product => product.id === id)
  if (productIdx > -1) {
    productsCollection.splice(productIdx, 1)
    return true
  }
  return false
}

export function add(dto) {
  const createdProduct = create(dto)
  productsCollection.push(createdProduct)
  const { id, ...product } = createdProduct
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}

function create(dto) {
  // console.log('dto', dto)
  return { id: Math.random().toString(), ...dto }
}

export function updateById(productId, dto) {
  const findedProduct = productsCollection.find(
    product => product.id === productId
  )
  if (!findedProduct) return null
  Object.assign(findedProduct, dto)
  const { id, ...product } = findedProduct
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}
