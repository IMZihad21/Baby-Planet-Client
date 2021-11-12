import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const Login = ({ redirect }) => {
    const { register, handleSubmit } = useForm();
    const { emailPassLogin } = useProvider();
    const onSubmit = (formData) => {
        const { email, password } = formData;
        if (email === "" || password === "") {
            toast.error("Error :: Fill all the fields before sign in");
            return;
        }
        emailPassLogin(email, password, redirect);
    }
    return (
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-left">
                <label htmlFor="email" className="text-lg font-medium text-pink-700 block mb-2">Email Address</label>
                <input {...register("email")} type="email" id="email" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <div className="text-left">
                <label htmlFor="password" className="text-lg font-medium text-pink-700 block mb-2">Password</label>
                <input {...register("password")} type="password" id="password" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Sign In</button>
        </form >
    );
};

export default Login;