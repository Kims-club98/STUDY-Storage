// 페이지 상단에 고정적으로 위치

import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className='nav-link'>Schedule</Link>
            </li>
            <li className="nav-item">
              <Link to="/atcalendar" className='nav-link'>근태관리</Link>
            </li>
          </ul>
        </div>
      </nav>      
    </>
  )
}
export default Header
