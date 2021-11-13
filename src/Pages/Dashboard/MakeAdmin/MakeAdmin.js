import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const MakeAdmin = () => {
    const { token } = useProvider();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (formData) => {
        const { email } = formData;
        axios.put('http://localhost:9000/users/admin', { email: email }, { headers: { 'authorization': `Bearer ${token}` } })
            .then((result) => {
                if (result.data.matchedCount) {
                    if (result.data.modifiedCount === 1) {
                        toast.success('Added new admin succesfully');
                    } else {
                        toast.warning('This user is already Admin')
                    }
                    reset();
                }
            }).catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className='m-10'>
            <h1 className="text-lg font-bold text-pink-700 block mb-2">Add New Admin</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-left">
                    <label htmlFor="email" className="font-medium text-pink-600 block mb-1">Product Name</label>
                    <input {...register("email")} type="email" id="email" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" required="" />
                </div>
                <button type="submit" className="w-full mt-5 text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Make Admin</button>
            </form >
        </div>
    );
};

export default MakeAdmin;