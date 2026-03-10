import { ObjectId } from 'mongodb'
import dbConnection from '../dbConnection.js'

const collection = dbConnection.collection('products')
const transformObject = ({ _id, ...o }) => ({ ...o, id: _id.toString() })

export async function getProductsAll() {
  const result = await collection.find({}).toArray()
  return result.map(transformObject)
}

export async function getProductById(id) {
  const _id = new ObjectId(id)
  const result = await collection.findOne({ _id })
  if (!result) return null
  return transformObject(result)
}

export async function addProduct(dto) {
  await collection.insertOne(dto)
  return transformObject(dto)
}

export async function deleteProductById(id) {
  const _id = new ObjectId(id)
  return (await collection.deleteOne({ _id })).deletedCount > 0
}

export async function updateProductById(id, dto) {
  const _id = new ObjectId(id)
  const result = await collection.findOneAndUpdate(
    { _id },
    { $set: dto },
    { returnDocument: 'after' }
  )
  if (!result) return null
  return transformObject(result)
}
