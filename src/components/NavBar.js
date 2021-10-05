import React,{useState,useEffect} from 'react';
import {Link} from 'react-scroll';
import './NavBar.css';


function NavBar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className ="navbar">
                <div className = "navbar-container">
                    
                    {/* <Link to= "/" className = "navbar-logo" onClick= {closeMobileMenu}>
                        WINSTON LAM

                    </Link> */}
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' :'fas fa-bars'}></i>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='hero' activeClass="active" spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='about' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='projects' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='contact' spy={true} smooth={true} className = 'nav-links' onClick = {closeMobileMenu}>
                                CONTACT
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
