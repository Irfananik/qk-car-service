import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result =>{
            console.log(result)
        })
    }
    return (
        <div className="container my-5 mx-auto">
            <form className="d-flex flex-column w-50" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder="description" {...register("description")} />
                <input className='mb-3' placeholder="price" type="number" {...register("price")} />
                <input className='mb-3' placeholder="image url" type="text" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;