import React, { useState } from 'react' ; 
import './css/Navbar.css' ; 
import { Link } from 'react-router-dom' ;
function Navbar() {
    const [click , setClick] = useState(false) ; 

    const handleClick = () => setClick(!click) ; 

    const CloseMobileMenu = () => setClick(false) ; 

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={CloseMobileMenu}>GRAHIL</Link>
            </div>        
            <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link 
                     to = "/"
                     className="nav-links"
                     onClick={CloseMobileMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                     to = "/"
                     className="nav-links"
                     onClick={CloseMobileMenu}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                     to = "/"
                     className="nav-links"
                     onClick={CloseMobileMenu}
                    >
                        Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                     to = "/"
                     className="nav-links"
                     onClick={CloseMobileMenu}
                    >
                        More
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
