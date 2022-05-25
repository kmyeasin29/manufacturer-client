import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import myPhoto from '../../images/myphoto.png';
import myPhoto1 from '../../images/myphoto1.png';

const Portfolio = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='' style={{ width: '500px' }} src={myPhoto} alt='' />
                    <div>
                        <h1 className="text-8xl font-bold">K.M. YEASIN</h1>
                        <p className="text-3xl py-6">Creative Web Developper</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img style={{ width: '300px' }} src={myPhoto1} />
                    <div>
                        <h1 className="text-5xl font-bold">K.M. YEASIN</h1>
                        <li className='text-2xl mt-5' >
                        EMAIL: km_yeasin@yahoo.com
                        </li>
                        <li className='text-2xl mt-5' >
                        EDUCATION: B.Sc
                        </li>
                        <li className='text-2xl mt-5' >
                        SKILLS: HTML, CSS, JAVASCRIPT, REACTJS etc.
                        </li>
                        <li className='text-2xl mt-5 '>
                         PROJECTS: 
                        <a href="https://darling-smakager-b38d91.netlify.app/">Project-1</a>,
                        <a href="https://lively-hummingbird-828b47.netlify.app/home">Project-2</a>,
                        <a href="https://keen-agnesi-d6d55f.netlify.app/#">Project-3</a>
                        </li>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;