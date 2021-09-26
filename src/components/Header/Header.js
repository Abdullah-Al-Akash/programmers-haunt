import React from 'react';
import './Header.css';
import sideImg from '../images/side-img.gif'

const Header = () => {
        return (
                <div className="container">
                        <div className="row">
                                <div className="col-8 pt-4 head-line text-center text-white">
                                        <h1>Programmer's Haunt</h1>
                                        <h3>First, solve the problem. Then, write the code...</h3>
                                        <h5 className="gold-color">Budget: 100Million USD</h5>
                                </div>

                                <div className="col-4 text-end">
                                        <img src={sideImg} className="img-fluid p-2 side-img" alt="" height="270" width="270" />
                                </div>
                        </div>
                        <p class="hr gold-bg"></p>
                </div>
        );
};

export default Header;