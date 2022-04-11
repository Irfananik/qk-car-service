import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name, img, price, description } = service
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h4>Service Name: {name}</h4>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button className="btn btn-primary">Book: {name}</button>
        </div>
    );
};

export default Service;