import './Menu.css';
import Logo from './img/logo.png';
import { Link } from 'react-router-dom';

const Menu = () =>{
    return(
        
        <nav className="menu">
        <div>
                <img src={Logo} alt="Logo" />
            </div>
        <ul>
            <li> <Link to="/"> Home</Link> </li>
            <li> <Link to="/carrocompras"> Productos</Link> </li>
            <li> <Link to="/personal"> Nosotros</Link> </li>
            <li> <Link to="/login"> Login </Link> </li>
            <li> <Link to="/registro"> Registro </Link> </li>
        </ul>
        </nav>
        

    );
};

export default Menu;
