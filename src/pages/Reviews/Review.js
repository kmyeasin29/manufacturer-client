import React from 'react';
import UseReview from '../Hook/UseReview';
import ReviewCard from './ReviewCard';

const Review = () => {
    const [review, setReview] = UseReview();
    return (
        <div className='mt-8'>
            <h2 className='text-center my-4 text-primary text-4xl font-bold uppercase underline'>Customer Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 px-12'>
                {review.map(item => <ReviewCard
                    key={review.id}
                    item={item}
                ></ReviewCard>
                )}
            </div>
        </div>
    );
};

export default Review;