import "./NavBar.css";
import {Link} from 'react-router-dom';
function NavBar(props) {
    return (
        <nav>  
            <ul className="roberto">
            <Link to="/"><li ><img className="logo" src="https://www.dafont.com/forum/attach/orig/3/6/366983.png" alt="logo" width={"16%"}/></li></Link>
            <Link to="/"><li className="item">Home</li></Link>
            <Link to="//category/:id"><li className="item">Categoria</li></Link>
            <Link to="/"><li className="item">Info</li></Link>
            <Link to="/"><li className="item">Contactos</li></Link>
            </ul>
        </nav>
    );
}


export default NavBar; 

