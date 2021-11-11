import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Header = () => {
    return (
        <div className='mx-10 flex justify-between'>
            <div className='h-28'>
                <Link to='/home'>
                    <img className='w-full h-full' src="https://i.ibb.co/mSrC2Xp/header-logo.png" alt="" />
                </Link>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </div>
            <div className='my-auto rounded-lg'>
                {
                    <Link to='/authentication'>
                        <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg'><i class="fas fa-sign-in-alt"></i> Sign In</button>
                    </Link>
                }
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-search"></i> Search</button>
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-shopping-cart"></i> Cart</button>
            </div>
        </div>
    );
};

export default Header;