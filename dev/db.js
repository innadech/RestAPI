import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'

const MONGO_URI =
  'mongodb+srv://dechevaiv_db_user:Ft8DovncMUlZf1tk@cluster0.zxtkvwh.mongodb.net/entities'

let collection

async function connectToDB() {
  await mongoose.connect(MONGO_URI)
  const db = mongoose.connection.db
  collection = db.collection('cars')
}

async function getCarsAll() {
  return await collection.find({}).toArray()
}

async function getCarById(id) {
  const _id = new ObjectId(id)
  return await collection.findOne({ _id })
}

async function addCar(dto) {
  return await collection.insertOne(dto)
}

async function deleteCarBy(id) {
  const _id = new ObjectId(id)
  return await collection.deleteOne({ _id })
}

async function updateCarBy(id, dto) {
  const _id = new ObjectId(id)
  return await collection.updateOne({ _id }, { $set: dto })
}

async function work() {
  await connectToDB()
  const cars = await getCarsAll()
  console.log(cars)
  // const car = await getCarById('69a389efcb158c1dbf549a3f')
  // console.log(car)
  // const ackAdd = await addCar({ brand: 'Ford', price: 21000 })
  // console.log(ackAdd)
  // const ackDel = await deleteCarBy('69a8e7fcc190c617e6f5801c')
  // console.log(ackDel)
  // const ackUpd = await updateCarBy('69a8ec0d6c24683ab3ce1d7a', {
  //   brand: 'Ferrari',
  //   price: 77000,
  // })
  // console.log(ackUpd)
}

work()
