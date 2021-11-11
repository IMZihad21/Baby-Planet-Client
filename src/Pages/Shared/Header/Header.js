import React from 'react';
import logo from '../../../Images/header-logo.png'

const Header = () => {
    return (
        <div className='mx-10 flex justify-between'>
            <div className='h-32'>
                <img className='w-full h-full' src={logo} alt="" />
            </div>
            <div className='my-auto rounded-lg'>
                <input className='border px-20 py-3 rounded-l-lg' type="text" />
                <button className='bg-pink-700 hover:bg-pink-500 px-10 py-3 rounded-r-lg'><i className="text-white fas fa-search"></i></button>
                <button className='bg-pink-700 hover:bg-pink-500 px-10 py-3 rounded-lg ml-2'><i className="text-white fas fa-shopping-cart"></i></button>
            </div>
        </div>
    );
};

export default Header;