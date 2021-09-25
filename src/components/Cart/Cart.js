import React from 'react';
import './Cart.css';

const Cart = (props) => {
        const { selectedProgrammers } = props;
        // Calculate Total Cost:
        let totalCost = 0;
        for (let programmer of selectedProgrammers) {
                totalCost = totalCost + programmer.salary;
        }
        return (
                <div>
                        <h5><i className="fas fa-users-cog text-success"></i> Added Programmers: {selectedProgrammers.length}</h5>
                        <h5><i className="fas fa-money-check-alt text-success"></i> Total Cost: ${totalCost}</h5>
                </div>
        );
};

export default Cart;