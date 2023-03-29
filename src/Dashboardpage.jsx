import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate= useNavigate()
  return (
    <div className="Dashboard1">

      <div className="Dashboard">
        <h1>Welcome to the Admin Panel</h1>
        <button className="btn"onClick={()=>navigate('/employeelist')}>Click here to add data</button>
      </div>
      <div >
        
      </div>
    </div>
  );
}

export default Dashboard;
