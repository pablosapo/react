import Productos from './Productos';
import DatosProductos from './datosProductos';

function ListaProductos(){
    return(
        <div>
        {DatosProductos.map((productos, index) => (
            <Productos
                key={index}
                nombre={productos.nombre}
                detalle={productos.detalle}
                marca={productos.marca}
                precio={productos.precio}
                stock={productos.stock}
                codigo={productos.codigo}
                imagen={productos.imagen}
            />
            ))}
        </div>
    )
}
export default ListaProductos;

