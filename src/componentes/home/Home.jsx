import './Home.css'
import Celular from './imagenes/celular.jpg'
import Tablet from './imagenes/tablet.jpg'
import Audifono from './imagenes/audifono.jpg'
import Notebook from './imagenes/notebook.jpg'
import Reloj from './imagenes/reloj.jpg'
import Consola from './imagenes/consola.jpg'
import { Link } from "react-router-dom";


const Home = () =>{
    return (
        <div className='contenedor-productos'>
            <div className='productos'>
                <h2>Celular</h2>
                <p>Samsung</p>
                <img src={Celular} alt="celular" />
                <button className='boton-producto'>Ver Detalle</button>

            </div>
            <div className='productos'>
                <h2>Tablet</h2>
                <p>Samsung</p>
                <img src={Tablet} alt="tablet" />
                <button className='boton-producto'>Ver Detalle</button>
            </div>
            <div className='productos'>
                <h2>Audifono</h2>
                <p>Huawei</p>
                <img src={Audifono} alt="Audifono" />
                <button className='boton-producto'>Ver Detalle</button>
            </div>
            <div className='productos'>
                <h2>Notebook</h2>
                <p>Asus</p>
                <img src={Notebook} alt="Notebook" />
                <button className='boton-producto'>Ver Detalle</button>
            </div>
                <div className='productos'>
                <h2>Reloj</h2>
                <p>Reloj Inteligente</p>
                <img src={Reloj} alt="Reloj" />
                <button className='boton-producto'>Ver Detalle</button>
            </div>
            <div className='productos'>
                <h2>Consola</h2>
                <p>Consola Niendo</p>
                <img src={Consola} alt="celular" />
                <button className='boton-producto'>Ver Detalle</button>
            </div>
        </div>
        
    );
};

export default Home;