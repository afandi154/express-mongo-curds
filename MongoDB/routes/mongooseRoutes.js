import express from 'express'
import {
  getProducts, getProductByID,
  postProduct, getProductsBySearch,
  updateProduct, deleteProduct
} from '../controllers/mongoProducts.js'

const mongooseRouter = express.Router()

mongooseRouter.get('/', getProducts)
mongooseRouter.get('/:search', getProductsBySearch)
mongooseRouter.get('/detail/:id', getProductByID)
mongooseRouter.post('/', postProduct)
mongooseRouter.patch('/edit/:id', updateProduct)
mongooseRouter.delete('/delete/:id', deleteProduct)

export default mongooseRouter