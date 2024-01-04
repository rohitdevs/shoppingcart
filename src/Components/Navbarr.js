import React from 'react'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <div className='navbar'>
      <div className="lefttop">Shopping Cart</div>
      <div className="righttop">
      <Link to="/">Home Page</Link> 
      <Link to="/cart">Cart Page</Link> 
      </div>
    </div>
  )
}

export default Navbarr
