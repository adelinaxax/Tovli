import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../header/images/logo.png';
import accountIcon from './images/account.svg';
import cartIcon from './images/cart.svg';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="TOVLI" width={160} height={84} className="header-logo" />
        </Link>

        <ul className="nav-list">
          <li>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/mission" className="nav-link">
              Mission
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Join the cause
            </Link>
          </li>
          <li>
            <Link to="/learn" className="nav-link">
              Learn
            </Link>
          </li>
        </ul>

        <div className="nav-icons">
          <Link to="/account" className="icon-link">
            <img src={accountIcon} alt="Аккаунт" className="nav-icon" width={26} height={28} />
          </Link>
          <Link to="/cart" className="icon-link">
            <img src={cartIcon} alt="Корзина" className="nav-icon" width={26} height={28} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
