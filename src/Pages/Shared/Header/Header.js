import React from 'react';

const Header = () => {
    return (
        <div className='mx-10 flex justify-between'>
            <div className='h-32'>
                <img className='w-full h-full' src="https://i.ibb.co/mSrC2Xp/header-logo.png" alt="" />
            </div>
            <div className='my-auto rounded-lg'>
                {
                    <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg'><i class="fas fa-sign-in-alt"></i> Sign In</button>
                }
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-search"></i> Search</button>
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-shopping-cart"></i> Cart</button>
            </div>
        </div>
    );
};

export default Header;