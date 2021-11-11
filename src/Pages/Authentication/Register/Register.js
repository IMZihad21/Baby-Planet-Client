import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const Register = ({ redirect }) => {
    const { register, handleSubmit } = useForm();
    const { emailPassRegister } = useProvider();
    const onSubmit = (formData) => {
        const { displayName, email, password, rePassword } = formData;
        if (displayName === "" || email === "" || password === "" || rePassword === "") {
            toast.error("Error (Fill all the fields before sign in)");
            return;
        }
        emailPassRegister(displayName, email, password, redirect);
    }
    return (
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-left">
                <label htmlFor="displayName" className="text-lg font-medium text-pink-700 block mb-2">Full Name</label>
                <input {...register("displayName")} type="text" id="displayName" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <div className="text-left">
                <label htmlFor="email" className="text-lg font-medium text-pink-700 block mb-2">Email Address</label>
                <input {...register("email")} type="email" id="email" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <div className="text-left">
                <label htmlFor="password" className="text-lg font-medium text-pink-700 block mb-2">Password</label>
                <input {...register("password")} type="password" id="password" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <div className="text-left">
                <label htmlFor="rePassword" className="text-lg font-medium text-pink-700 block mb-2">Re-Enter Password</label>
                <input {...register("rePassword")} type="password" id="rePassword" className="bg-pink-50 border border-pink-700 sm:text-sm rounded-lg w-full p-2.5 mb-2" required="" />
            </div>
            <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Sign Up</button>
        </form >
    );
};

export default Register;