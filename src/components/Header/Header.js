import React from 'react';
import './Header.css';

const Header = () => {
        return (
                <div>
                        <div className="container-fluid text-center text-white bg-dark pt-4 pb-4">
                                <h3>Programmer's Haunt</h3>
                                <h4>First, solve the problem. Then, write the code.</h4>
                                <h5 className="text-danger">Budget: 100Million USD</h5>
                        </div>
                </div>
        );
};

export default Header;