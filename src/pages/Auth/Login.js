import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';


const Login = () => {
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
                                <p href="#" className="text-decoration-none text-l label-text-alt link link-hover decoration-none">New in Entergy?
                                    <Link className='text-decoration-none text-blue' to='/Registration'> Register</Link>
                                </p>
                            </label>
                        </div>
                        <div className="card-actions justify-center ">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;