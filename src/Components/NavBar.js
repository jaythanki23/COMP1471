import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Sterile Services Ltd
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to ='/hospital-staff' className='nav-links' onClick={closeMobileMenu}>
                                Hospital Staff
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to ='/sterilization-staff' className='nav-links' onClick={closeMobileMenu}>
                                Sterilization Staff
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to ='/manager' className='nav-links' onClick={closeMobileMenu}>
                                Manager
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar