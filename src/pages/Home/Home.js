import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BSummary from './BSummary';
import Extra from './Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Extra></Extra>
            {/* <BSummary></BSummary> */}
            <Tools></Tools>
        </div>
    );
};

export default Home;