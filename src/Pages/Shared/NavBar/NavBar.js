import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='mx-10 bg-gray-100 py-3 rounded space-x-5'>
            <NavLink className='text-pink-700 hover:bg-pink-100 p-3 rounded-lg text-xl' activeClassName='border-b-4 border-red-100' exact to='/'>Home</NavLink>
            <NavLink className='text-pink-700 hover:bg-pink-100 p-3 rounded-lg text-xl' activeClassName='border-b-4 border-red-100' to='/products'>Explore</NavLink>
        </div>
    );
};

export default NavBar;