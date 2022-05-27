import React from 'react';

const ReviewCard = ({ item }) => {
    console.log(item);
    const { Ratting, name, Comment } = item;

    return (
        <div className='card w-96 bg-base-100 shadow-xl bg-slate-200'>
            <div className='card-body items-center'>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p>Comment: {Comment}</p>
                <span>Ratting: {Ratting} </span>
            </div>
        </div>
    );
};

export default ReviewCard;