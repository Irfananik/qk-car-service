import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()

    const [service, setService] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1> Welcome to the service detail:{service.name}</h1>
            <Link to={'/checkout'}>
                <button className="btn btn-primary">
                    Check out your service
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;