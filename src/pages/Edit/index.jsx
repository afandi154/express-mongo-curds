import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
  const navigate = useNavigate()
  const { id: productId } = useParams()
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState({
    name: false,
    price: false,
    stock: false
  })

  useEffect(() => { getData(`http://localhost:9000/products/detail/${productId}`) }, [productId])

  const getData = async (link) => {
    let data = null
    try {
      data = await axios.get(link)
    } catch (error) {
      data = error
    }
    const { name, price, stock, status } = data.data
    return setData({ name, price, stock, status })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (data.name.length >= 5 && data.price > 0 && data.stock > 0) {
      try {
        await axios.patch(`http://localhost:9000/products/edit/${productId}`, {
          name: data.name,
          price: data.price,
          stock: data.stock,
          status: data.status
        })
        alert("Data Berhasil diupdate !")
        navigate('/')
      } catch (error) {
        alert("Data Gagal diupdate !")
        console.log(error)
      }
    } else {
      alert("Update Gagal, harap masukan data dengan benar !")
    }
  }

  return (
    data &&
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <div className="card">
        <h2 style={{ margin: 0 }}>Edit Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">Nama</label>
          <Input name="name" type="text" placeholder="Nama Produk..."
            defaultValue={data.name}
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

          <label className="label" htmlFor="price">Harga</label>
          <Input name="price" type="number" placeholder="Harga Produk..."
            defaultValue={data.price}
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

          <label className="label" htmlFor="stock">Stock</label>
          <Input name="stock" type="number" placeholder="Stock Produk..."
            defaultValue={data.stock}
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
            defaultChecked={data.status}
            onChange={(e) => setData(value => ({
              ...value, status: e.target.checked
            }))} />
          <button type="submit" className="btn btn-primary">Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;