import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    price: null,
    stock: null,
    status: false
  })
  const [errors, setErrors] = useState({
    name: false,
    price: false,
    stock: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data.name.length >= 5 && data.price > 0 && data.stock > 0) {
      try {
        await axios.post('http://localhost:9000/products', {
          name: data.name,
          price: data.price,
          stock: data.stock,
          status: data.status
        })
        alert("Data Berhasil dimasukan !")
        navigate('/')
      } catch (error) {
        alert("Data Gagal dimasukan !")
        console.log(error)
      }
    } else {
      alert("Input Gagal, harap masukan data dengan benar !")
    }
  }

  return (
    <div className="main" style={{ display: "flex", justifyContent: "center" }} >
      <div className="card">
        <h2 style={{ margin: 0 }}>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className='label'>Nama</label>
          <Input name="name" type="text" placeholder="Nama Produk..."
            onChange={(e) => setData(value => ({
              ...value, name: e.target.value
            }))}
            onBlur={() => data.name.length < 5 ? setErrors(value => ({
              ...value, name: true
            })) : setErrors(value => ({ ...value, name: false }))}
          />
          {
            errors.name &&
            <span className='warning'>*Nama harus lebih besar dari 5 karakter</span>
          }

          <label htmlFor="price" className='label'>Harga</label>
          <Input name="price" type="number" placeholder="Harga Produk..."
            onChange={(e) => setData(value => ({
              ...value, price: e.target.value
            }))}
            onBlur={() => !data.price || data.price < 1 ? setErrors(value => ({
              ...value, price: true
            })) : setErrors(value => ({ ...value, price: false }))}
          />
          {
            errors.price &&
            <span className='warning'>*Harga harus lebih besar dari 0</span>
          }

          <label htmlFor="stock" className='label'>Stock</label>
          <Input name="stock" type="number" placeholder="Stock Produk..."
            onChange={(e) => setData(value => ({
              ...value, stock: e.target.value
            }))}
            onBlur={() => !data.stock || data.stock < 1 ? setErrors(value => ({
              ...value, stock: true
            })) : setErrors(value => ({ ...value, stock: false }))}
          />
          {
            errors.stock &&
            <span className='warning'>*Stock harus lebih besar dari 0</span>
          }

          <Input name="status" type="checkbox" label="Status" style={{ marginTop: '15px' }}
            onChange={(e) => setData(value => ({
              ...value, status: e.target.checked
            }))} />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div >
  )
}

export default Tambah;