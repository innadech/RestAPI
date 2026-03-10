import convertor from '../utils/convertor.js'
import ordersCollection from '../collections/ordersCollection.js'

export function getAll() {
  const orders = ordersCollection.map(({ id, ...order }) => ({
    order: { $: { id }, ...order },
  }))
  const json = { orders }
  return convertor(json, 'ordersSchema')
}

export function getById(orderId) {
  const { id, ...order } =
    ordersCollection.find(order => order.id === orderId) ?? {}
  if (!id) return null
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}

export function deleteById(id) {
  const orderIdx = ordersCollection.findIndex(order => order.id === id)
  if (orderIdx > -1) {
    ordersCollection.splice(orderIdx, 1)
    return true
  }
  return false
}

export function add(dto) {
  const createdOrder = create(dto)
  ordersCollection.push(createdOrder)
  const { id, ...order } = createdOrder
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}

function create(dto) {
  // console.log('dto', dto)
  return { id: Math.random().toString(), ...dto }
}

export function updateById(orderId, dto) {
  const findedOrder = ordersCollection.find(order => order.id === orderId)
  if (!findedOrder) return null
  Object.assign(findedOrder, dto)
  const { id, ...order } = findedOrder
  const json = { order: { $: { id }, ...order } }
  return convertor(json, 'orderSchema')
}
