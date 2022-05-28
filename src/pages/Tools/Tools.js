import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    // const [cart, setCart] = useState([])
    const [tools, setTools] = useState([])

    // const handleClick = tool => {
    //     if (cart.indexOf(tool) !== -1) return;
    //     setCart([...cart, tool]);
    //     console.log(tool);
    // }

    useEffect(() => {
        fetch('https://stormy-dusk-68089.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div className='mt-8'>
            <h3 className='text-center my-4 text-primary text-4xl font-bold uppercase underline'>Our Manufacturing Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 px-12'>

                {
                tools.slice(0, 6).map(tool => <Tool
                        tool={tool}
                        // handleClick={handleClick}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;