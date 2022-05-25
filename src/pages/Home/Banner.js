import React from 'react';
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen"
        style={{
            background: `url(${banner})`
        }} 
        >
            <div className="hero-content flex-col">
                <div>
                    <h1 className="text-7xl text-white font-bold tracking-wide w-full">NEED NEW TOOLS?</h1>
                    <button className="btn btn-primary mt-8">Get Started</button>
                </div>
                
            </div>
        </div>
    );
};
export default Banner;