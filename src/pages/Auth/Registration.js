import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let signInError;

    if (loading) {
        return <button class="btn btn-square loading"></button>
    };
    if (error) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex justify-center mb-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" className="input input-bordered"
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    }
                                )}
                            />
                            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                        </div>
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
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                        <p className='mt-3 fs-5'>Already Registered? <Link className='text-decoration-none pe-auto text-secondary' to='/login'>Login!</Link></p>
                    </form>

                    <div className="divider">or</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;