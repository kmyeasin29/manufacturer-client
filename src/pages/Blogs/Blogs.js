import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12 mb-8'>
            <div tabindex="0" className="mt-12 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-2xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content mt-8">
                    <h2 className='text-xl font-bold'>Process of Optimizing performance in a React application:</h2>
                    <p className='mt-5 text-xl'>
                        <li>Keep the necessary components state local where needed.</li>
                        <li>Remembering React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import.</li>
                        <li>Keep list virtualization in React.</li>
                        <li>Active lazy loading for images</li>
                    </p>
                </div>
            </div>
            <div tabindex="0" className="mt-12 px-12 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-2xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content mt-8">
                    <h2 className='text-xl font-bold'>There are four different ways to manage a state in React application:</h2>
                    <p className='mt-5 text-xl'>
                        <li>Use state</li>
                        <li>Global state</li>
                        <li>URL state.</li>
                        <li>Server state</li>
                    </p>
                </div>
            </div>
            <div tabindex="0" className="mt-12 px-12 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-2xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content mt-8">
                    <p className='mt-5 text-xl'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It is a process by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabindex="0" className="mt-12 px-12 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-2xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content mt-8">
                    <p className='mt-5 text-xl'>
                        A unit test is the smallest testable part of an application like functions, classes, procedures, interfaces. Unit testing is a method by which individual units of source code are tested to determine if they are fit for use.
                        Unit tests form the solid base of the testing pyramid. They are the cheapest kinds of tests to run, and can be run frequently throughout the deployment pipeline. Unit tests allow us to find errors the soonest, and to fix them before they bubble up in other, more expensive kinds of testing like functional or UI tests, which take much longer to complete and run than unit tests.
                    </p>
                </div>
            </div>
            <div tabindex="0" className="mt-12 px-12 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-2xl font-medium">
                    Why you do not set the state directly in React?
                </div>
                <div className="collapse-content mt-8">
                    <p className='mt-5 text-xl'>
                        One should never update the state directly because of the following reasons: If you update it directly, calling the setState afterward may just replace the update you made. When you directly update the state, it does not change this.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;