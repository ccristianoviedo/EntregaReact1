import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {
    return <div>
    <ul className='menu'>
        <li className='menua'>
            <Link to="/">HOME</Link>
        </li>
        <li className='menua'>
            <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li className='menua'>
            <Link to="/about">NOSOTROS</Link>
        </li>
       
                           
    </ul>  
    </div>
}

export default Navbar;