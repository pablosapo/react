import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();


    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      alert('Por favor, completa todos los campos.');
      return;
    }


    if (password.length < 12) {
      setErrorMessage('La contraseña debe tener al menos 12 caracteres.');
      alert('La contraseña debe tener al menos 12 caracteres.');
      return;
    }


    console.log('Iniciando sesión con:', { username, password });




    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className='contenedor-login'>
      
      <form onSubmit={handleLogin} className='login'>
        <div>
        <h2>Login</h2>
        </div>

        <div className='user'>  
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Ingrese su Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='Boton-login'>Iniciar Sesión</button>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
