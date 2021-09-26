import React from 'react';
import './Footer.css'
import card from '../images/card.png'
const Footer = () => {
        return (
                <div>
                        <footer id="footer" class="bg-dark text-white pt-5 pb-3 mt-5">
                                <div class="container">
                                        <div class="row d-flex justify-content-between align-items-center">
                                                <div class="col-lg-5 pb-5">
                                                        <h6>Level-4, 34, Maskanda Passport Office Road, Mymensingh.</h6>
                                                        <h6>Official: abc@gmail.com</h6>
                                                        <h6>Helpline : +878545454545 (Available : 09:00am to 7:00pm)</h6>
                                                </div>
                                                <div class="col-lg-3 pb-5 footer-text">
                                                        <h6>About Us</h6>
                                                        <h6>Refund Policy</h6>
                                                        <h6>Terms & Condition</h6>
                                                        <h6>Privacy Policy</h6>
                                                </div>
                                                <div class="col-lg-4">
                                                        <img class="img-fluid rounded" src={card} alt="" />
                                                </div>
                                        </div>
                                </div>
                                <p class="text-center pt-3 m-0">Copyright © 2021 || Programmers Haunt</p>
                                <p className="text-center m-0 p-0"><small>Made by Abdullah Al Akash</small></p>
                        </footer>
                </div>
        );
};

export default Footer;