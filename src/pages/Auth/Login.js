import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;

    useEffect( () =>{
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <button class="btn btn-square loading"></button>
    };
    if (error) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex justify-center mb-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Give the valid email'
                                        }
                                    }
                                )}
                            />
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Give at least 6 charecters'
                                        }
                                    }
                                )}
                            />
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </div>
                        {signInError}
                        <div className="card-actions justify-center mt-3">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                        <p className='mt-3 fs-5'>New Here? <Link className='text-decoration-none pe-auto text-secondary' to='/Registration'>Register</Link></p>
                    </form>

                    <div className="divider">or</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;