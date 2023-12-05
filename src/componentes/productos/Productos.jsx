import PropTypes from "prop-types";
import imagenes from './imagenes';
import './Productos.css';


function Productos(props){
    console.log('Ruta de la imagen:', imagenes[props.imagen]);

    return(

    <div className="container-productos-interior">
    <h2> {props.nombre}</h2>
    <img src={imagenes[props.imagen]} alt={props.nombre}/>
    <h3>{props.detalle}</h3>
    <p> Marca: {props.marca}</p>
    <p> Precio: {props.precio}</p>
    <p> Stock en tienda: {props.stock}</p>
    <p> Codigo producto: {props.codigo}</p>
    </div>
    )
}

Productos.propTypes = {
    nombre: PropTypes.string.isRequired,
    detalle: PropTypes.string,
    marca: PropTypes.string,
    precio: PropTypes.string,
    stock: PropTypes.string,
    codigo: PropTypes.string,
    imagen: PropTypes.string,

};


export default Productos;