import { ObjectId } from 'mongodb'
import db from '../config-native/connect.js'

export const getProducts = (req, res) => {
  db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const getProductsBySearch = (req, res) => {
  const { search } = req.params
  const regex = new RegExp(search, 'gi')

  db.collection('products').find(
    { name: regex }
  )
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const getProductByID = (req, res) => {
  db.collection('products').findOne({
    _id: ObjectId(req.params.id)
  })
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const postProduct = (req, res) => {
  const { name, price, stock, status } = req.body

  db.collection('products').insertOne(
    { name, price: parseInt(price), stock: parseInt(stock), status }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const updateProduct = (req, res) => {
  const { name, price, stock, status } = req.body

  db.collection('products').updateOne(
    { _id: ObjectId(req.params.id) },
    { $set: { name, price: parseInt(price), stock: parseInt(stock), status } }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const deleteProduct = (req, res) => {
  db.collection('products').deleteOne(
    { _id: ObjectId(req.params.id) }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}