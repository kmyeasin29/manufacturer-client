import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BSummary from './BSummary';
import Extra from './Extra';

const Home = () => {
    return (
        <div className='mb-8'>
            <Banner></Banner>
            <Extra></Extra>
            <Tools></Tools>
            <BSummary></BSummary>
        </div>
    );
};

export default Home;