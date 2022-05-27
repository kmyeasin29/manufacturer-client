import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firbase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="https://i.ibb.co/WvnL3qx/logo.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li>{user? <button class="btn btn-ghost">Logout</button>:<Link to='/login'>Login</Link>}</li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <p className='text-3xl'><span className='text-primary'>Enter</span>gy</p>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blogs</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li>{user? <button class="btn btn-ghost" onClick={handleSignOut}>Logout</button>:<Link to='/login'>Login</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;