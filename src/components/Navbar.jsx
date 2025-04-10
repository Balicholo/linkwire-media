import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".navbar-container")) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className={`navbar-container ${isMenuOpen ? "menu-open" : ""}`}>
            <nav>
                <div className="logo">
                    <NavLink to="/" aria-label="Home" onClick={closeMenu}>
                        LINKWIRE
                    </NavLink>
                </div>

                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active" onClick={closeMenu}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active" onClick={closeMenu}>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div className="icons">
                    <a href="#" aria-label="Phone">
                        <i className="ri-phone-line"></i>
                    </a>
                    <a href="#" aria-label="Email">
                        <i className="ri-mail-line"></i>
                    </a>
                </div>
                <div className="nav-button">
                    <a href="/contact">
                        <button>Contact</button>
                    </a>
                </div>
                <button
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
        </div>
    );
};

export default Navbar;