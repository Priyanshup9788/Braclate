import React from 'react'

const Header = () => {
  return (
    <header>
    <nav className="navbar">
      <div className="logo">
        <a href="#">Jewelry Store</a>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="cart">
        <a href="#">Cart (0)</a>
      </div>
    </nav>
  </header>
  )
}

export default Header