import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='mt-8'>
            <h3 className='text-center my-4 text-primary text-4xl font-bold uppercase underline'>Our Manufacturing Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 px-12'>

                {
                    tools.slice(0, 6).map(tool => <Tool
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;