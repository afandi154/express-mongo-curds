import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = ({ db }) => {
  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getData(`http://localhost:9000/${db}/products/${search}`)
  }, [search, db])

  const getData = async (link) => {
    let data = null

    try {
      data = await axios.get(link)
    } catch (error) {
      data = error
    }
    return setData(data.data)
  }

  const deleteProduct = async (id) => {
    let data = null

    try {
      data = await axios.delete(`http://localhost:9000/${db}/products/delete/${id}`)
      alert("Data Berhasil Dihapus !")
      getData(`http://localhost:9000/${db}/products/${search}`)
    } catch (error) {
      data = error
      alert("Data Gagal Dihapus !")
    }
    return data
  }

  return (
    data &&
    <div className="main">
      <Link to={`/${db}/tambah`} className="btn btn-primary">Tamah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..."
          onChange={(e) => setSearch(e.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((res, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{res.name}</td>
                  <td>{res.price}</td>
                  <td className="text-center">
                    <Link to={`/${db}/detail/${res._id}`} className="btn btn-sm btn-info">Detail</Link>
                    <Link to={`/${db}/edit/${res._id}`} className="btn btn-sm btn-warning">Edit</Link>
                    <Link to={`/${db}/`}
                      onClick={() => deleteProduct(res._id)}
                      className="btn btn-sm btn-danger">Delete
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home;