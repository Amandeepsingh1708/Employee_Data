import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Send login request to server and handle response
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <>
     {/* <ul className="nav">
     <img src="https://tse3.explicit.bing.net/th?id=OIP.SfF0y9-kEv9WG2_yhjV5kwAAAA&pid=Api&P=0" alt="" />
     </ul> */}
    <div className='container'>
      <div className='main_login'>
      <form onSubmit={handleLogin}>
      <h1>Login page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit" onClick={()=> navigate('/dashboard')}>Login</button>
    </form>
      </div>
   
    </div>
    </>
  );
};

export default EmployeeLogin;
