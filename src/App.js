import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';

const App = () => {
  return (
    <div>
      <Navigation db="mongoose" />
      <Routes>
        {/* Default Home Endpoint */}
        <Route path="/" element={<Navigate replace to={'/mongoose'} />} />
        <Route path="*" element={<Navigate replace to={'/mongoose'} />} />

        {/* Native Endpoint */}
        <Route path="/native" element={<Home db="native" />} />
        <Route path="/native/detail/:id" element={<Detail db="native" />} />
        <Route path="/native/edit/:id" element={<Edit db="native" />} />
        <Route path="/native/tambah" element={<Tambah db="native" />} />

        {/* Mongoose Endpoint */}
        <Route path="/mongoose" element={<Home db="mongoose" />} />
        <Route path="/mongoose/detail/:id" element={<Detail db="mongoose" />} />
        <Route path="/mongoose/edit/:id" element={<Edit db="mongoose" />} />
        <Route path="/mongoose/tambah" element={<Tambah db="mongoose" />} />
      </Routes>
    </div>
  )
}

export default App;