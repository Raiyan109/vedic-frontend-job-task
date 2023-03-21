import React from 'react';
import img from '../../assets/recycle-5047886_640.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-primary'><a>Home</a></li>
                            <li className='text-primary'><a>About us</a></li>
                            <li className='text-primary'><a>Services</a></li>
                            <li className='text-primary'><a>Blog</a></li>
                            <li className='text-primary'><a>Contact</a></li>
                        </ul>
                    </div>
                    <img src={img} width="70" height="70" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-primary'><a>Home</a></li>
                        <li className='text-primary'><a>About us</a></li>
                        <li className='text-primary'><a>Services</a></li>
                        <li className='text-primary'><a>Blog</a></li>
                        <li className='text-primary'><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary text-white">Get A Quote</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;