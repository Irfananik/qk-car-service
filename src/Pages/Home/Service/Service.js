import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const { id, name, img, price, description } = service
    const navigate = useNavigate()

    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h4>Service Name: {name}</h4>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button onClick={() => navigateToServiceDetails(id)} className="btn btn-primary">Book: {name}</button>
        </div>
    );
};

export default Service;