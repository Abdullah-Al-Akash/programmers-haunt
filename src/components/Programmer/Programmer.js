import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
        // console.log(props.handleCart)
        // Destructuring Data from props:
        const { handleCart } = props;
        const { name, age, img, address, salary, hobby } = props.programmer;
        return (
                <div>
                        <div className="col">
                                <div className="card h-100">
                                        <div className="single-img d-flex justify-content-center align-items-center rounded-top">
                                                <img src={img} className="rounded-circle border border-3 border-dark" alt="Cinque Terre" width="180" height="180" />
                                        </div>
                                        <div className="card-body text-center">
                                                <div className="card-information">
                                                        <h5 className="card-title">{name}</h5>
                                                        <p className="card-text">Age: {age}</p>
                                                        <h4 className="text-warning">Salary: ${salary}</h4>
                                                        <h5>Address: {address}</h5>
                                                        <h6>Hobby: {hobby}</h6>
                                                </div>
                                                <button onClick={() => handleCart(props.programmer)} type="button" className="btn btn-success"><i className="fas fa-plus-square"></i> Select Programmer</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Programmer;