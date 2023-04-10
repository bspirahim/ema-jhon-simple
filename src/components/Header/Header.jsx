import React from 'react';
import './Header.css'
import logo from '../../components/images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
          <div>
          <img src={logo} alt="" />
          </div>
           <div>
             <Link to="/shop">Shop</Link>
             <Link to="/order">Order</Link>
             <Link to="/inventory">Inventory</Link>
             <Link to="login">Login</Link>
           </div>
        </nav>
    );
};

export default Header;