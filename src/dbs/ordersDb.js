import { ObjectId } from 'mongodb'
import dbConnection from '../dbConnection.js'

const collection = dbConnection.collection('orders')
const transformObject = ({ _id, ...o }) => ({ ...o, id: _id.toString() })

export async function getOrdersAll() {
  const result = await collection.find({}).toArray()
  return result.map(transformObject)
}

export async function getOrderById(id) {
  const _id = new ObjectId(id)
  const result = await collection.findOne({ _id })
  if (!result) return null
  return transformObject(result)
}

export async function addOrder(dto) {
  await collection.insertOne(dto)
  return transformObject(dto)
}

export async function deleteOrderById(id) {
  const _id = new ObjectId(id)
  return (await collection.deleteOne({ _id })).deletedCount > 0
}

export async function updateOrderById(id, dto) {
  const _id = new ObjectId(id)
  const result = await collection.findOneAndUpdate(
    { _id },
    { $set: dto },
    { returnDocument: 'after' }
  )
  if (!result) return null
  return transformObject(result)
}
