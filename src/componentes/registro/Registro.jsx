import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    sexo: '',
    correo: '',
    telefono: '',
    direccion: '',
    comuna: '',
    pais: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === '') {
        setErrorMessage('Por favor, completa todos los campos.');
        alert('Por favor, completa todos los campos.');
        return;
      }
    }

    setFormData({
      nombres: '',
      apellidos: '',
      sexo: '',
      correo: '',
      telefono: '',
      direccion: '',
      comuna: '',
      pais: ''
    });
    setErrorMessage('');
  };

  return (
    <div className='contenedor-registro'>
      <form onSubmit={handleRegistration}>
        <h2>Formulario de Registro</h2>
        <div>
          <label htmlFor="nombres"></label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
            placeholder="Ingrese sus nombres"
          />
        </div>
        <div>
          <label htmlFor="apellidos"></label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
            placeholder="Ingrese sus apellidos"
          />
        </div>
        <div>
          <label htmlFor="sexo"></label>
          <input
            type="text"
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
            placeholder="Ingrese su sexo"
          />
        </div>
        <div>
          <label htmlFor="corro"></label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            placeholder="Ingrese dirección de correo electrónico"
          />
        </div>
        <div>
          <label htmlFor="telefono"></label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            placeholder="Ingrese su telefono"
          />
        </div>
        <div>
          <label htmlFor="direccion"></label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleInputChange}
            placeholder="Ingrese su direccion"
          />
        </div>
        <div>
          <label htmlFor="comuna"></label>
          <input
            type="text"
            id="comuna"
            name="comuna"
            value={formData.comuna}
            onChange={handleInputChange}
            placeholder="Ingrese su ciudad"
          />
        </div>
        <div>
          <label htmlFor="pais"></label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleInputChange}
            placeholder="Ingrese su pais"
          />
        </div>
         

        <button type="submit" className='boton-registro'>Registrarse</button>

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Registro;
