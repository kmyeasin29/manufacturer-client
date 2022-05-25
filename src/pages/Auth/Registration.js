import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='flex justify-center mb-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="label-text-alt link link-hover text-decoration-none">Already Registered?
                                    <Link to='/login'>Login</Link>
                                </p>
                            </label>
                        </div>
                        <div className="card-actions justify-center ">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;