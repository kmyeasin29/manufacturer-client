import React from 'react';

const Tool = ({tool}) => {
    const {name, image, description, available, minimum, price}=tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
               <h2 className="card-title text-3xl">{name}</h2>
                <p>{description}</p>
                <div className="items-left w-full">
                <h2 className='text-xl'>Available: {available} pcs</h2>
                <h2 className='text-xl'>Minimum Order: {minimum} pcs</h2>
                <h2 className='text-xl'>Price: ${price}</h2>
                <div className="card-actions mt-3">
                    <button className="btn btn-primary item-center w-full">Buy Now</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Tool;