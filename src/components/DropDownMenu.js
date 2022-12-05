import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import '../styles/DropDownMenu.scss'
import menu from '../assets/menu.png';
import Logout from './Logout';


const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const menuDrop = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (!menuDrop.current.contains(e.target)) {
        setOpen(false)
      }
    };

    document.addEventListener('mousedown', handler)
  })

  return (
    <div ref={menuDrop} className='menu-container'>
      <div onClick={() => { setOpen(!open) }}>
        <img src={menu} alt="" />
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <div>
          <h3 onClick={() => navigate('/dashboard')} className='drop-down-item'>Dashboard</h3>
          <h3 onClick={() => navigate('/schedule')} className='drop-down-item'>Schedule</h3>
          <h3 onClick={() => navigate('/')} className='drop-down-item'>About</h3>
          <h3 className='drop-down-item'><Logout /></h3>
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;