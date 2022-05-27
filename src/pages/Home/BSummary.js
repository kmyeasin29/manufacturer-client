import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFlag } from '@fortawesome/free-solid-svg-icons';
import { BeakerIcon } from '@heroicons/vue/solid'

import React from 'react';

const BSummary = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-center my-4 text-primary text-4xl font-bold uppercase underline'>Business Summery</h2>
            <div class="stats shadow  flex justify-center">
                <div class="stat place-items-center">
                    <div class="stat-title">We Served</div>
                    <div class="stat-value">31K</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Customer</div>
                    <div class="stat-value text-secondary">444,200</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Annual Reveneu</div>
                    <div class="stat-value">33k+</div>
                </div>
                <div class="stat place-items-center">
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">500+ Tools</div>
                </div>

            </div>
        </div>
    );
};

export default BSummary;