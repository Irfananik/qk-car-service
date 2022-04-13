import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1> Welcome to the service detail:{serviceId}</h1>
            <Link to={'/checkout'}>
                <button className="btn btn-primary">
                    Check out your service
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;