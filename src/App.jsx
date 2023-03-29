import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboardpage'
import EmployeeLogin from './EmployeeLogin'
import EmployeeList from './CreateEmployeeList'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'element={<EmployeeLogin/>}/>
    <Route path='/dashboard'element={<Dashboard/>}/>
    <Route path='/employeelist' element={<EmployeeList/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App