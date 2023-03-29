import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul className="nav">
    <img src="https://tse3.explicit.bing.net/th?id=OIP.SfF0y9-kEv9WG2_yhjV5kwAAAA&pid=Api&P=0" alt="" />
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/employeelist">EmployeeList</Link></li>
      <li><a href="/">Logout</a></li>
    </ul>
    </>
  )
}

export default Navbar