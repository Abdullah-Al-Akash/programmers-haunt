import React from 'react';
import './SelectedProgrammer.css';

const SelectedProgrammer = (props) => {
        // console.log(props.sProgrammer);
        const { name, img } = props.sProgrammer;
        return (
                <div>
                        <div className="card mb-3 sProgrammer">
                                <div className="row g-0">
                                        <div className="col-md-3 single-img">
                                                <img src={img} className="img-fluid rounded-circle" alt="..." />
                                        </div>
                                        <div className="col-md-7">
                                                <div className="card-body d-flex align-items-center">
                                                        <h5 className="card-title">{name}</h5>
                                                </div>
                                        </div>
                                        <div className="col-md-2 d-flex align-items-center">
                                                <button type="button" className="btn btn-warning"> ❌</button>
                                        </div>
                                </div>
                        </div>
                </div >
        );
};

export default SelectedProgrammer;