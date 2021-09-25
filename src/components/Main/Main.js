import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Main.css';

const Main = () => {
        // Declare useState for state Data:
        const [programmers, setProgrammers] = useState([]);
        // Load Data from JSON file:
        useEffect(() => {
                fetch('./programmers.JSON')
                        .then(res => res.json())
                        .then(data => setProgrammers(data))
        }, []);

        // For Cart Calculation Pass Data by onClick:
        const handleCart = id => {
                console.log(id)
        }
        return (
                <div className="container mt-5">
                        <div className="row">
                                <div className="col-lg-9">
                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                {
                                                        programmers.map(programmer => <Programmer
                                                                key={programmer.id}
                                                                programmer={programmer}
                                                                handleCart={handleCart}
                                                        >
                                                        </Programmer>)
                                                }
                                        </div>
                                </div>
                                <div className="col-lg-3">
                                        <Cart></Cart>
                                </div>
                        </div>
                </div>
        );
};

export default Main;