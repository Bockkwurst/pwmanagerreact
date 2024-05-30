import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import './compcss/navbar.modules.css';
import {
    FaFortAwesomeAlt,
    FaRegEdit,
    FaEnvelopeOpenText,
    FaExpeditedssl,
    FaUserCog,
    FaRandom,
    FaDoorOpen
} from "react-icons/fa";
import {useAuth} from "../utils/AuthProvider.jsx";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {token, setToken} = useAuth();
    const navigate = useNavigate();

    const handleLogoClick = (event) => {
        event.preventDefault();
        token ? navigate('/home') : navigate('/');
    }

    const handleLogout = () => {
        setToken(null);
        navigate('/');
    }

    return (
        <nav className="menu-container">
            <a href="/" onClick={handleLogoClick} className="title">
                <img src="pwmanagerlogo.svg" alt="pwmanagerlogo" className="logo"/>
            </a>
            <div
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu">
                {token ? (
                    <div className="links-container">
                        <div className="top-links">
                            <li className="item">
                                <NavLink to="/add" className="link">
                                    <FaExpeditedssl className="icon"/>
                                    <div className="text">Neuer Eintrag</div>
                                </NavLink>
                            </li>
                            <li className="item">
                                <NavLink to="/randomizer" className="link">
                                    <FaRandom className="icon"/>
                                    <div className="text">Passwort Generator</div>
                                </NavLink>
                            </li>
                            <li className="item">
                                <NavLink to="/userdetails" className="link">
                                    <FaUserCog className="icon"/>
                                    <div className="text">Mein Konto</div>
                                </NavLink>
                            </li>
                            <li className="item">
                                <NavLink to="/contact" className="link">
                                    <FaEnvelopeOpenText className="icon"/>
                                    <div className="text">Kontakt</div>
                                </NavLink>
                            </li>
                        </div>
                        <li className="item logout-item">
                            <NavLink to="/" onClick={handleLogout} className="logout">
                                <FaDoorOpen className="icon"/>
                                <div className="text">Logout</div>
                            </NavLink>
                        </li>
                    </div>
                ) : (
                    <div className="top-links">
                        <li className="item">
                            <NavLink to="/login" className="link">
                                <FaFortAwesomeAlt className="icon"/>
                                <div className="text">Login</div>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/register" className="link">
                                <FaRegEdit className="icon"/>
                                <div className="text">Registrieren</div>
                            </NavLink>
                        </li>
                        <li className="item">
                            <NavLink to="/contact" className="link">
                                <FaEnvelopeOpenText className="icon"/>
                                <div className="text">Kontakt</div>
                            </NavLink>
                        </li>
                    </div>
                )}
            </ul>
        </nav>
    );
}
export default Navbar;