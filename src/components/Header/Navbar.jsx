import React from 'react';
import Label from "daisyui/components/label/index.js";
import {Link} from "react-router";

const Navbar = () => {
    const links = <>
        <Link to='/'>
            <li className="box-border border border-green-500 rounded-md px-5 py-3 mx-4 text-center text-[rgb(35,190,10)] font-work-sans text-lg font-semibold">Home</li>
            
        </Link>
        <li className="px-[17px] py-[14px] mx-[10px] text-center text-White font-work-sans text-lg font-normal">Listed
            Books
        </li>
        <li className="px-[17px] py-[14px] mx-[10px] text-center text-White font-work-sans text-lg font-normal">Pages to
            Read
        </li>
        <Link to='/about'>
            <li className="px-[17px] py-[14px] mx-[10px] text-center text-White font-work-sans text-lg font-normal">About</li>
        </Link>
    </>

    return (<div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Boi Poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>);
};

export default Navbar;
