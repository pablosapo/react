
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Menu from './componentes/menu/Menu'
import Login from './componentes/login/Login'
import Registro from './componentes/registro/Registro'
import ListaProductos from './componentes/productos/ListaProductos'
import CarroCompras from './componentes/carrocompras/CarroCompras'
import DetalleCarro from './componentes/carrocompras/DetalleCarro'
import Personal from './componentes/personal/Personal'
import DetallePersonal from './componentes/personal/DetallePersonal'



function App() {

  return (
    <div className='contenedor'>
    <Router>
        <Header/>
        <Menu/>
        <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/carrocompras" element={<CarroCompras />} />
        <Route path="/detallecarro/:codigo" element={<DetalleCarro />} />
        <Route path="/detallepersonal/:id" element={<DetallePersonal />} />
        </Routes>
        <Footer/>
    
    </Router></div>
  )
}

export default App;
