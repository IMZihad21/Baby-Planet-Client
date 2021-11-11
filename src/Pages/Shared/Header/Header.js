import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import useProvider from '../../../Hooks/useProvider';

const Header = () => {
    const { user } = useProvider();
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
            <div className='my-auto rounded-lg flex'>
                {
                    user.uid ?
                        (<div className="flex space-x-4 bg-pink-100 rounded-xl">
                            <Link to='/authentication'>
                                <div className="flex">
                                    <div className="w-16 md:w-12 p-1 m-auto">
                                        <img className="w-full rounded-full" src={user.photoURL} alt={user.displayName} />
                                    </div>
                                    <h1 className="text-xl font-semibold w-28 my-auto px-1 md:px-2 md:py-2">{user.displayName}</h1>
                                </div>
                            </Link>
                            <Link to='/dashboard'>
                                <button className="w-20 md:w-auto py-4 md:px-10 py-2 md:py-3 my-auto text-white font-bold bg-pink-700 hover:bg-pink-600 rounded-xl">
                                    Dashboard
                                </button>
                            </Link>
                        </div>) :
                        (<Link to='/authentication'>
                            <button className="px-10 py-3 my-auto text-white font-bold bg-pink-700  hover:bg-pink-600 rounded-xl">
                                Sign In
                            </button>
                        </Link>)
                }
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-search"></i> Search</button>
                <button className='text-white bg-pink-700 hover:bg-pink-600 px-5 py-3 rounded-lg ml-2'><i className="fas fa-shopping-cart"></i> Cart</button>
            </div>
        </div>
    );
};

export default Header;