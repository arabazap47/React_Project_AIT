import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Css/Navbar.css'

const NavBar = () => {
  return (
    <header className='z-3 sticky-top'>
      <nav className="nav_bar container-fluid">
        <div className="row row-cols-lg-2">
          <Link to="hero" className="logo">
            <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="Arbaz" />
          </Link>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list d-flex gap-5 justify-content-end">
              <li className="nav__items">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>

              <li className="nav__items">
                <Link
                 to="shop"
                 class="nav-link active"
                 aria-current="page"
                 href="#"
                >
                  Shop
                </Link>
              </li>

              <li className="nav__items">
                <Link
                  to="cart"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Cart
                </Link>
              </li>
              <li className="nav__items">
                <Link
                  
                >
                  <FaUser />
                </Link>
              </li>

              <li className="nav__items">
                <Link
                  to="cart"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <MdShoppingCart />
                </Link>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>

            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
