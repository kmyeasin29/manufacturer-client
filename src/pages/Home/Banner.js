import React from 'react';
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen"
        style={{
            background: `url(${banner})`
        }} 
        >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 class="text-7xl text-white font-bold tracking-wide w-full">NEED NEW TOOLS?</h1>
                    <button class="btn btn-primary mt-8">Get Started</button>
                </div>
                
            </div>
        </div>
    );
};
export default Banner;