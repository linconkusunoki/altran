import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/gnome/1">Detail</Link>
      </li>
    </ul>
  )
}

export default Nav
