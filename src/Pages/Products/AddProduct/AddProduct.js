import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = formData => {
        const { productName, productDescription, productImage, productPrice } = formData;
        if (productName === '' || productDescription === '' || productImage === '' || productPrice < 1) {
            toast.error('Please fill all the fields before submitting')
            return;
        }
        const productsData = { productName, productDescription, productImage, productPrice }
        axios.post('https://baby-care-planet.herokuapp.com/products', productsData)
            .then((response) => {
                if (response.data.acknowledged) {
                    toast.success('Product Added Succesfully!')
                    reset();
                } else {
                    toast.error("Error :: Failed to add product!")
                };
            });
    };
    return (
        <div className='md:m-10 md:flex'>
            <div className='md:w-1/2 px-5'>
                <h1 className="text-lg font-bold text-pink-700 block mb-2">Add New Products</h1>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-left">
                        <label htmlFor="productName" className="font-medium text-pink-600 block mb-1">Product Name</label>
                        <input {...register("productName")} type="text" id="productName" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" required="" />
                    </div>
                    <div className="text-left">
                        <label htmlFor="productDescription" className="font-medium text-pink-600 block mb-1">Product Description</label>
                        <textarea {...register("productDescription")} rows={2} id="productDescription" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" placeholder='What do you think about our service?' required="" />
                    </div>
                    <div className="text-left">
                        <label htmlFor="productImage" className="font-medium text-pink-600 block mb-1">Product Image Link</label>
                        <input {...register("productImage")} type="text" id="productImage" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" required="" />
                    </div>
                    <div className="text-left">
                        <label htmlFor="productPrice" className="font-medium text-pink-600 block mb-1">Product Price</label>
                        <input {...register("productPrice")} type="number" step="0.01" id="productPrice" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" min={1} required="" />
                    </div>
                    <button type="submit" className="w-full mt-5 text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Add Product</button>
                </form >
            </div>
            <div className='md:w-1/2 hidden md:block'>
                <img className='w-full h-full rounded-xl' src="https://i.ibb.co/WBYtkdH/reviewbanner.jpg" alt="" />
            </div>
        </div>
    );
};

export default AddProduct;