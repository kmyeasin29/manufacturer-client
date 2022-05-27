import React from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../Hook/UseReview';
import Review from '../Reviews/Review';
import ReviewCard from '../Reviews/ReviewCard';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BSummary from './BSummary';
import Extra from './Extra';

const Home = () => {
    const [review, setReview] = UseReview();
    const loadProduct = review.slice(0, 3);
    return (
        <div className='mb-8'>
            <Banner></Banner>
            <Extra></Extra>
            <Tools></Tools>
            <BSummary></BSummary>
            <div className='mt-8'>
                <h1 className='text-center my-4 text-primary text-4xl font-bold uppercase underline'>Customers Reviews</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 items-center px-12">
                    {
                        loadProduct.map(item => <ReviewCard key={review.id} item={item}></ReviewCard>)
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <Link to='/review'>
                        <button className='btn btn-primary'>See All Reviews</button>
                    </Link>
                </div>
            </div>
            {/* <Review></Review> */}
        </div>
    );
};

export default Home;