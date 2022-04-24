import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './index.scss';

const Detail = () => {
  const { id: productId } = useParams()
  const [data, setData] = useState('')

  useEffect(() => { getData(`http://localhost:9000/mongoose/products/detail/${productId}`) }, [productId])

  const getData = async (link) => {
    let data = null
    try {
      data = await axios.get(link)
    } catch (error) {
      data = error
    }
    return setData(data.data)
  }

  return (
    data &&
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{data._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{data.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{data.stock}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{data && data.status ? "True" : "False"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;