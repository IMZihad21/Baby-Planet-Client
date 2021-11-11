import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='mx-10 bg-gray-100 py-4 rounded'>
            <NavLink className='text-pink-700 hover:text-pink-500 text-2xl' exact to='/'>Home</NavLink>
        </div>
    );
};

export default NavBar;