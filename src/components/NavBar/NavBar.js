import React,{useState,useEffect} from 'react';
import {Link} from 'react-scroll';
import './NavBar.css';


function NavBar() {

    //state variable for clicked icon bar
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    //closes icon bar when window is minimized
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className ="navbar">
                <div className = "navbar-container">
                    
                    
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' :'fas fa-bars'}></i>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='hero' activeClass="active" spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='about' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='projects' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='contact' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <a href="https://www.linkedin.com/in/winston-lam-979696201/" target="_blank" className = 'nav-links' onClick = {closeMobileMenu}>
                            <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                        <li className = 'nav-item'>
                            <a href="https://github.com/winstonl4m" target="_blank" className = 'nav-links' onClick = {closeMobileMenu}>
                            <i className="fab fa-github fa-2x"></i>
                            
                            
                
                            </a>
                        </li>
                        

                    </ul>
                </div>
            </nav>       
        </>
    )
}

export default NavBar
