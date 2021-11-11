import React, { useState } from 'react';
import useProvider from '../../../Hooks/useProvider';
import Login from '../Login/Login';
import Register from '../Register/Register';
import UserProfile from '../UserProfile/UserProfile';

const Authentication = () => {
    const { user, googleLogin } = useProvider();
    const [ newUser, setNewUser ] = useState(false);
    return (
        <div className='flex'>
            <div className="md:w-1/2 px-10">
                {
                    user.uid ?
                        <UserProfile /> :
                        <div>
                            <div>
                                { !newUser ? <Login /> : <Register /> }
                                <button onClick={() => setNewUser(!newUser)} className="w-full bg-pink-100 hover:bg-pink-50 font-medium rounded-lg mt-2 py-2.5">{
                                    newUser ? "Already Signed Up? Log In here!" : "New User? Sign Up here!"
                                }</button>
                                <button onClick={googleLogin} className="text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg w-full mt-3 py-2.5">Sign In with Google</button>
                            </div>
                        </div>
                }
            </div>
            <div className='md:w-1/2'>
                <img src="https://i.ibb.co/SfLsQGZ/humphrey-muleba-lt5-EX1-CEHt-U-unsplash-removebg-preview.png" alt="dummy" />
            </div>
        </div>
    );
};

export default Authentication;