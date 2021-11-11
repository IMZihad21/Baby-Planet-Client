import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='mx-10 bg-gray-100 py-3 rounded'>
            <NavLink className='text-pink-700 hover:bg-pink-100 p-3 rounded-lg text-xl' exact to='/'>Home</NavLink>
        </div>
    );
};

export default NavBar;