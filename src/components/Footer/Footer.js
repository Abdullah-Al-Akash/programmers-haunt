import React from 'react';
import './Footer.css'
import card from '../images/card.png';
import logo from '../images/logo.png';
const Footer = () => {
        return (
                <div>
                        <footer id="footer" className="bg-dark text-white pt-5 pb-3 mt-5">
                                <div className="container">
                                        <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-lg-5 pb-5">
                                                        <h4 className="gold-color logo-title mb-3">
                                                                <img className="img-fluid me-2" src={logo} alt="" height="45" width="45" />
                                                                Programmers Haunt
                                                        </h4>
                                                        <h6>Level-4, 34, Maskanda Passport Office Road, Mymensingh.</h6>
                                                        <h6>Official: abc@gmail.com</h6>
                                                        <h6>Helpline : +878545454545 (Available : 09:00am to 7:00pm)</h6>
                                                </div>
                                                <div className="col-lg-3 pb-5 footer-text">
                                                        <h6>About Us</h6>
                                                        <h6>Refund Policy</h6>
                                                        <h6>Terms & Condition</h6>
                                                        <h6>Privacy Policy</h6>
                                                </div>
                                                <div className="col-lg-4">
                                                        <img className="img-fluid rounded" src={card} alt="" />
                                                </div>
                                        </div>
                                </div>
                                <p className="text-center pt-3 m-0">Copyright © 2021 || Programmers Haunt</p>
                                <p className="text-center m-0 p-0"><small>Made by <span className="gold-color">Abdullah Al Akash</span></small></p>
                        </footer>
                </div>
        );
};

export default Footer;