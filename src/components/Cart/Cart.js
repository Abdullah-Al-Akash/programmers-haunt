import React from 'react';
import SelectedProgrammer from '../SelectedProgrammer/SelectedProgrammer';
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
                        <div className="text-center gold-bg pt-3 pb-3 rounded">
                                <h5><i className="fas fa-users-cog text-success"></i> Added Programmers: {selectedProgrammers.length}</h5>
                                <h5><i className="fas fa-money-check-alt text-success"></i> Total Cost: ${totalCost}</h5>
                        </div>
                        <div className="row mt-3">
                                {
                                        selectedProgrammers.map(sProgrammer => <SelectedProgrammer
                                                key={sProgrammer.id}
                                                sProgrammer={sProgrammer}
                                        >
                                        </SelectedProgrammer>)
                                }
                        </div>
                </div>
        );
};

export default Cart;