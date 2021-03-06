import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (

        <div className="col-sm-12 col-md-6 col-lg-3 g-5">
            <div className="card" style={{ width: '18rem' }}>
                <img className="img-fluid" src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};

export default Expert;