import { NavLink } from 'react-router-dom';
import './index.scss';

const Navigation = ({ db }) => {
  return (
    <div>
      <div className="navbar">
        <h4 className="navbar-brand">React x Express</h4>
        <ul className="link-wrapper">
          <li className="link">
            <NavLink to={`/${db}`}>Home</NavLink>
          </li>
          <li className="link">
            <NavLink to={`/${db}/tambah`}>Tambah</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;