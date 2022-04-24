import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Field nama harus diisi'],
    minlength: 3,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
    min: 1000,
    max: 100000000
  },
  stock: Number,
  status: {
    type: Boolean,
    default: true
  }
})
const Product = mongoose.model('Product', productSchema)
export default Product