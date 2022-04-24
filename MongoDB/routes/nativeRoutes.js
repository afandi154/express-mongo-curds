import express from 'express'
import {
  getProducts, getProductByID,
  postProduct, getProductsBySearch,
  updateProduct, deleteProduct
} from '../controllers/nativeProducts.js'

const nativeRouter = express.Router()

nativeRouter.get('/', getProducts)
nativeRouter.get('/:search', getProductsBySearch)
nativeRouter.get('/detail/:id', getProductByID)
nativeRouter.post('/', postProduct)
nativeRouter.patch('/edit/:id', updateProduct)
nativeRouter.delete('/delete/:id', deleteProduct)

export default nativeRouter