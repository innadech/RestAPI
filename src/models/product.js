import convertor from '../utils/convertor.js'
import {
  addProduct,
  deleteProductById,
  getProductById,
  getProductsAll,
  updateProductById,
} from '../dbs/productsDb.js'

export async function getAll() {
  const data = await getProductsAll()
  const products = data.map(({ id, ...product }) => ({
    product: { $: { id }, ...product },
  }))
  const json = { products }
  return convertor(json, 'productsSchema')
}

export async function getById(productId) {
  const data = await getProductById(productId)
  const { id, ...product } = data ?? {}
  if (!id) return null
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}

export async function deleteById(id) {
  return await deleteProductById(id)
}

export async function add(dto) {
  const data = await addProduct(dto)
  const { id, ...product } = data
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}

export async function updateById(productId, dto) {
  const data = await updateProductById(productId, dto)
  if (!data) return null
  const { id, ...product } = data
  const json = { product: { $: { id }, ...product } }
  return convertor(json, 'productSchema')
}
