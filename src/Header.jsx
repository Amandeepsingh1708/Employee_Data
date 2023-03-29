import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/EmployeeLogin">EmployeeLogin</Link>
            </li>
            <li>
                <Link to="/Dashboaed"></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header