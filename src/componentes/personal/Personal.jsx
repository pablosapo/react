import { useState, useEffect } from 'react';
import { fetchUsuarios } from './api';
import { Link } from "react-router-dom";
import './Personal.css';



function Personal() {

  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsuarios();
        setPersonas(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);  
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      
      {loading ? ( 
        <p>Cargando...</p>  
      ) : (
        <div className='contenedor-personal'>
        <ul className="personas-lista">
          {personas.map(persona => (
            <li key={persona.id}>
              <h3>{persona.name}</h3> 
              <p>Email: {persona.email}</p>
              <Link to={`/DetallePersonal/${persona.id}`} className='boton-personal'>Ver Detalle</Link>
            </li>
          ))}
        </ul>
        </div>
      )}

    </div>
  );
}

export default Personal;