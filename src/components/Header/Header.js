import React from 'react';
import './Header.css';
import sideImg from '../images/side-img1.gif'

const Header = () => {
        return (
                <div className="container">
                        <div className="row">
                                <div className="col-8 pt-5 head-line text-center">
                                        <h3>Programmer's Haunt</h3>
                                        <h4>First, solve the problem. Then, write the code.</h4>
                                        <h5 className="text-danger">Budget: 100Million USD</h5>
                                </div>

                                <div className="col-4 text-end">
                                        <img src={sideImg} className="img-fluid" alt="" height="300" width="300" />
                                </div>
                        </div>
                </div>
        );
};

export default Header;