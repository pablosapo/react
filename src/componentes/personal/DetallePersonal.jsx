import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsuarioById } from './api';
import './DetallePersonal.css';
import { Link } from "react-router-dom";

function DetallePersonal() {

  const [loading, setLoading] = useState(true);
  const [persona, setPersona] = useState({});  

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsuarioById(id);
        setPersona(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching persona', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if(loading) {
    return <div>Cargando...</div>;
  }

  return (
    <section className='container-detalle-personal'>
    <div className='contenedor-detalle-personal'>
      <h2>Nombre:</h2>
      <p>{persona.name}</p>
      <h2>Email:</h2>
      <p>{persona.email}</p>
      <h2>Dirección:</h2>
      <p>{persona.address.street}, {persona.address.city}</p>
      <h2>Teléfono:</h2>
      <p>{persona.phone}</p>
      <h2>Empresa</h2>
      <p>{persona.company.name}, {persona.company.catchPhrase}, {persona.company.bs}</p>
      <div>
      <button className='boton-detalle-personal'><Link to="/Personal"> Volver Personal </Link></button>
      </div>
    </div>
    </section>
  );  
}

export default DetallePersonal;