import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import useProvider from '../../../Hooks/useProvider';

const Header = () => {
    const { user, logOut } = useProvider();
    return (
        <div className='md:mx-10  md:flex justify-between'>
            <div className='h-28'>
                <NavLink to='/home'>
                    <img className='w-full h-full' src="https://i.ibb.co/mSrC2Xp/header-logo.png" alt="" />
                </NavLink>
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
            <div className="my-auto mx-2 flex">
                <NavLink to='/home'>
                    <button className="md:px-5 px-1 py-3 text-white font-bold bg-pink-700  hover:bg-pink-600 rounded-l-lg">
                        <i class="fas fa-home"></i> Home
                    </button>
                </NavLink>
                <NavLink to='/products'>
                    <button className="md:px-5 px-1 py-3 text-white font-bold bg-pink-700  hover:bg-pink-600 ml-1">
                        <i class="fas fa-th-list"></i> Explore
                    </button>
                </NavLink>
                {
                    user.uid ?
                        (<div className="flex md:bg-pink-100 rounded-lg">
                            <NavLink to='/dashboard'>
                                <button className="md:w-auto px-1 md:px-5 py-3 text-white font-bold bg-pink-700 hover:bg-pink-600 ml-1">
                                    <i class="fas fa-columns"></i> Dashboard
                                </button>
                            </NavLink>
                            <button onClick={logOut} className="md:w-auto px-1 md:px-5 py-3  text-white font-bold bg-pink-700 hover:bg-pink-600 ml-1 rounded-r-lg">
                                <i class="fas fa-sign-out-alt"></i> Sign Out
                            </button>
                            <NavLink to='/authentication'>
                                <div className="md:flex hidden">
                                    {user.displayName && <h1 className="text-xl font-semibold w-28  px-1 md:px-2 md:py-2">{user.displayName}</h1>}
                                    <div className="w-16 md:w-12 p-1 m-auto">
                                        <img className="w-full rounded-full" src={user.photoURL ? user.photoURL : "https://i.ibb.co/cwYT56L/pngegg.png"} alt={user.displayName} />
                                    </div>
                                </div>
                            </NavLink>
                        </div>) :
                        (<NavLink to='/authentication'>
                            <button className="px-1 md:px-5 py-3 text-white font-bold bg-pink-700  hover:bg-pink-600 ml-1 rounded-r-lg">
                                <i class="fas fa-sign-in-alt"></i> Sign In
                            </button>
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Header;