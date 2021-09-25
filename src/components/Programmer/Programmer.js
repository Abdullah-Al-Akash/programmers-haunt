import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
        // console.log(props.handleCart)
        // Destructuring Data from props:
        const { handleCart } = props;
        const { id, name, age, img, address, salary, hobby } = props.programmer;
        return (
                <div>
                        <div className="col">
                                <div className="card h-100">
                                        <img src={img} className="rounded-circle mx-auto pt-2" alt="Cinque Terre" width="200" height="200" />
                                        <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">Age: {age}</p>
                                                <h4 className="text-success">Salary: ${salary}</h4>
                                                <h4>Address: {address}</h4>
                                                <h6>Hobby: {hobby}</h6>
                                                <button onClick={() => handleCart(props.programmer)} type="button" className="btn btn-success"><i className="fas fa-plus-square"></i> Select Programmer</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Programmer;