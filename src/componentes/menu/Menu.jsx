import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () =>{
    return(   
        <nav className="menu">
        <ul>
            <li> <Link to="/"> Home</Link> </li>
            <li> <Link to="/carrocompras"> Productos</Link> </li>
            <li> <Link to="/personal"> Personal</Link> </li>
            <li> <Link to="/login"> Login </Link> </li>
            <li> <Link to="/registro"> Registro </Link> </li>
        </ul>
        </nav>
        

    );
};

export default Menu;