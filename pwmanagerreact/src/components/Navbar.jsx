import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import './compcss/navbar.modules.css';
import {FaFortAwesomeAlt} from "react-icons/fa";
import {FaRegEdit} from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="menu-container">
            <Link to="/" className="title">
                <img src="pwmanagerlogo.svg" alt="pwmanagerlogo" className="logo"/>
            </Link>
            <div
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="menu">
                <>
                    <li className="item">
                        <NavLink to="/login" className="link">
                            <FaFortAwesomeAlt className="icon"/>
                            <div className="text">Login</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className="link">
                            <FaRegEdit className="icon"/>
                            <div className="text">Registrieren</div>
                        </NavLink>
                    </li>
                </>
            </ul>
        </nav>
    );
}
export default Navbar;