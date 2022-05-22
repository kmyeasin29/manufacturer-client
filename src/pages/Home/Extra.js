import React from 'react';
import extra1 from '../../images/extra-1.jpg'
import extra2 from '../../images/extra-2.jpg'
import extra3 from '../../images/extra-3.jpg'

const Extra = () => {
    return (
        <div className='mt-20 grid grid-cols-3 gap-8 px-12'>
            {/* <img class="mask mask-parallelogram-4" src="https://api.lorem.space/image/shoes?w=160&h=160" /> */}
            <img className='rounded' src={extra1} />
            <img className='rounded' src={extra2} />
            <img className='rounded' src={extra3} />
        </div>
    );
};

export default Extra;