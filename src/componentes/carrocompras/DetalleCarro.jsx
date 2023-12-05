import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarroCompras } from "./api";
import { Link } from "react-router-dom";
import './DetalleCarro.css';

function DetalleCarro() {
    const { codigo } = useParams();
    const [loading, setLoading] = useState(true);
    const [carrocompra, setDetalleCarro] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCarroCompras(codigo);
                setDetalleCarro(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Carro Compras:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [codigo]);

    if (loading) {
        return <div>Cargando Carro de Compras...</div>;
    } else if (carrocompra.nombre) {
        return <div>No se encontraron detalles para este personaje.</div>;
    } else {
        return (
            <div className="contenedor-detalle-carro-compras">
                <div className="detalle-carro-compras">
                <h2>Detalle de Producto</h2>
                <p>Nombre: {carrocompra.nombre}</p>
                <p>Detalle: {carrocompra.detalle}</p>
                <p>Marca: {carrocompra.marca}</p>
                <p>Precio: {carrocompra.precio}</p>
                <p>Stock: {carrocompra.stock}</p>
                <div className="boton-carro-compras">
                <Link to={`/CarroCompras`} className="link-carro">Volver a Comprar</Link>
                </div>
                </div>
            </div>
        );
    }
}

export default DetalleCarro;


