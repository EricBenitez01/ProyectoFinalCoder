import "./NavBar.css";
import {Link} from 'react-router-dom';
function NavBar(props) {
    return (
        <nav>  
            <ul className="roberto">
            <li ><Link to="/"><img className="logo" src="https://www.dafont.com/forum/attach/orig/3/6/366983.png" alt="logo" width={"16%"}/></Link></li>
            <li ><Link className="item"to="/">Home</Link></li>
            <li ><Link className="item"to="/category/:id">Categoria</Link></li>
            <li ><Link className="item"to="/">Info</Link></li>
            <li ><Link  className="item"to="/">Contactos</Link></li>
            </ul>
        </nav>
    );
}


export default NavBar; 

