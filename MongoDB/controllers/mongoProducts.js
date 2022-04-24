import Product from '../config-mongoose/model.js'

export const getProducts = (req, res) => {
  Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const getProductsBySearch = (req, res) => {
  const { search } = req.params
  const regex = new RegExp(search, 'gi')

  Product.find(
    { "name": { $regex: regex } }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const getProductByID = (req, res) => {
  Product.findOne({
    _id: req.params.id
  })
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const postProduct = (req, res) => {
  const { name, price, stock, status } = req.body

  Product.create({ name, price, stock, status })
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const updateProduct = (req, res) => {
  const { name, price, stock, status } = req.body

  Product.updateOne(
    { _id: req.params.id },
    { $set: { name, price, stock, status } }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

export const deleteProduct = (req, res) => {
  Product.deleteOne(
    { _id: req.params.id }
  )
    .then(result => res.send(result))
    .catch(error => res.send(error))
}