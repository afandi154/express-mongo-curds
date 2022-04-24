import express from 'express'
import {
  getProducts, getProductByID,
  postProduct, getProductsBySearch,
  updateProduct, deleteProduct
} from '../controllers/Products.js'

const router = express.Router()

router.get('/', getProducts)
router.get('/:search', getProductsBySearch)
router.get('/detail/:id', getProductByID)
router.post('/', postProduct)
router.patch('/edit/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router