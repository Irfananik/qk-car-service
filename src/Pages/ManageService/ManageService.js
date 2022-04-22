import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices()

    const handleServiceDelete = id => {
        const agree = window.confirm('Are you sure you want to delete')
        if(agree){
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div>
            {
                services.map(service => <div className="container my-5" key={service._id}>
                    <h4>{service.name} <button onClick={() => handleServiceDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;