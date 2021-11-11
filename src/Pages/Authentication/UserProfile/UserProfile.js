import React from 'react';
import useProvider from '../../../Hooks/useProvider';

const UserProfile = () => {
    const { user, logOut } = useProvider();
    return (
        <div>
            <div className='w-1/3 my-5 mx-auto'>
                <img className='w-full h-full rounded-full' src={user.photoURL ? user.photoURL : "https://i.ibb.co/cwYT56L/pngegg.png"} alt="" />
            </div>
            <h1 className='text-2xl mb-5'>Signed in as: <span className='font-semibold text-pink-700'>{user.displayName}</span></h1>
            <p className='text-xl mb-5'>Email: <span className='font-semibold text-pink-700'>{user.email}</span></p>
            <button onClick={logOut} className="w-full text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Sign Out</button>
        </div>
    );
};

export default UserProfile;