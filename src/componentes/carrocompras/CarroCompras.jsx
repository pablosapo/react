import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CarroCompras.css";
import { fetchCarroCompras } from "./api";

function CarroCompras() {
    const [carrocompras, setCarroCompras] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCarroCompras(); 
                setCarroCompras(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Contenedor-CarroCompras">
            {loading ? (
                <p>Cargando Carro de Compras...</p>
            ) : (
                <div className="carro-compras">
                    {carrocompras.map((carrocompra) => (
                        <div key={carrocompra.codigo} className="carro">
                            <h2>{carrocompra.nombre}</h2>
                            <p>{carrocompra.detalle}</p>
                            <p>Marca: {carrocompra.marca}</p>
                            <img src={carrocompra.imagenes} alt="{carrocompra.imagen}" />

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CarroCompras;