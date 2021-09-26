import React from 'react';
import './SelectedProgrammer.css';

const SelectedProgrammer = (props) => {
        // console.log(props.sProgrammer);
        const { name, img } = props.sProgrammer;
        return (
                <div>
                        <div className="card mb-3 sProgrammer">
                                <div className="row g-0">
                                        <div className="col-3">
                                                <div>
                                                        <img src={img} className="img-fluid ps-1" alt="..." />
                                                </div>
                                        </div>
                                        <div className="col-6">
                                                <div className="card-body d-flex align-items-center">
                                                        <h6 className="card-title mt-2">{name}</h6>
                                                </div>
                                        </div>
                                        <div className="col-3 d-flex justify-content-center align-items-center">
                                                <button type="button" className="btn btn-warning">❌</button>
                                        </div>
                                </div>
                        </div>
                </div >
        );
};

export default SelectedProgrammer;