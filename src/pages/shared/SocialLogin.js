import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firbase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div>
            <div className="card-actions justify-center ">
                <button onClick={() => signInWithGoogle()} className="btn btn-black w-full">
                    <img className='mr-5' style={{ width: "20px" }} src="https://i.ibb.co/Dr3mtyL/5847f9cbcef1014c0b5e48c8.png" alt="" />
                    Continue With Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;