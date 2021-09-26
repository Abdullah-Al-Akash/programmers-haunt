import React from 'react';
import './Navbar.css';

const Navbar = () => {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                                <a className="navbar-brand" href="#">Programmers Haunt</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                <li className="nav-item me-2">
                                                        <a className="nav-link active" aria-current="page" href="#">How We Works</a>
                                                </li>
                                                <li className="nav-item me-2">
                                                        <a className="nav-link active" aria-current="page" href="#">Our Programmers</a>
                                                </li>
                                                <li className="nav-item me-2">
                                                        <a className="nav-link active" aria-current="page" href="#">About Us</a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
};

export default Navbar;