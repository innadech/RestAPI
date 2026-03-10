import convertor from '../utils/convertor.js'
import {
  addOrder,
  deleteOrderById,
  getOrderById,
  getOrdersAll,
  updateOrderById,
} from '../dbs/ordersDb.js'

export async function getAll() {
  const data = await getOrdersAll()
  const orders = data.map(({ id, ...order }) => ({
    order: { $: { id }, ...order },
  }))
  const json = { orders }
  return convertor(json, 'ordersSchema')
}

export async function getById(orderId) {
  const data = await getOrderById(orderId)
  const { id, ...order } = data ?? {}
  if (!id) return null
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}

export async function deleteById(id) {
  return await deleteOrderById(id)
}

export async function add(dto) {
  const data = await addOrder(dto)
  const { id, ...order } = data
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}

export async function updateById(orderId, dto) {
  const data = await updateOrderById(orderId, dto)
  if (!data) return null
  const { id, ...order } = data
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}
