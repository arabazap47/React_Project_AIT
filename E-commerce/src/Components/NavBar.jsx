import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { IoMenuSharp, IoClose } from 'react-icons/io5';
import { FaShoppingBag } from "react-icons/fa";
import './Css/Navbar.css';
import { Badge, Drawer, Button, Space } from 'antd';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const items = useSelector((state) => state.cart.items);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav className="nav_bar container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Link to="/" className="lo_goIcon">
              <h2 className="logo"><FaShoppingBag className="logo_icon" />MART</h2>
            </Link>
          </div>

          <div className="col-lg-auto d-lg-flex items_nav">
            <ul className="nav__list d-flex gap-5 justify-content-end">
              <li>
                <Link className="nav__items" to="/">Home</Link>
              </li>
              <li>
                <Link className="nav__items" to="/shoppage">Shop</Link>
              </li>
              <li>
                <Link className="nav__items" to="/cartpage">Cart</Link>
              </li>
              <li>
                <Link className="nav__items" to="/profile">
                  <FiUser />
                </Link>
              </li>
              <li>
                <Link to="/cartpage">
                  <Badge className="nav__item" count={items.length} overflowCount={10}>
                    <MdShoppingCart />
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Space style={{backgroundColor: 'red'}}>
        <Button className='menu_btn_toggle' onClick={showDrawer}> <IoMenuSharp/></Button>
      </Space>
      <Drawer 
      className='drawer'
      placement={placement}
      closable={false}
      onClose={onClose}
      open={open}
      key={placement}
      >
        <button className='button_close' onClick={onClose}><IoClose/></button>
        <ul className="menubar">
        <li>
                <Link className="nav__items" to="/" onClick={onClose}>Home</Link>
              </li>
              <li>
                <Link className="nav__items" to="/shoppage" onClick={onClose}>Shop</Link>
              </li>
              <li>
                <Link className="nav__items" to="/cartpage" onClick={onClose}>Cart</Link>
              </li>
              <li>
                <Link className="nav__items" to="/profile">
                  Profile <FiUser />
                </Link>
              </li>
              <li>
                <Link to="/cartpage">
                  <Badge className="nav__item" onClick={onClose} count={items.length} overflowCount={10}>
                    <MdShoppingCart />
                  </Badge>
                </Link>
              </li>
        </ul>

      </Drawer>
    </header>
  );
};

export default NavBar;
