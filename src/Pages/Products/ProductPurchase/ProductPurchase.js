import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';
import Loading from '../../Shared/Loading/Loading';

const ProductPurchase = () => {
    const [ product, setProduct ] = useState({})
    const { register, handleSubmit } = useForm();
    const { user } = useProvider();
    const { productID } = useParams();

    const onSubmit = (formData) => {
        const { name, email, address, quantity } = formData;
        const totalCost = Math.round(((product.productPrice * quantity) + Number.EPSILON) * 100) / 100;
        if (name === '' || email === '' || address === '') {
            toast.error("Error :: Fill all the fields to continue purchase");
            return;
        }

        const orderDetails = {
            productName: product.productName,
            productQuantity: quantity,
            clientName: name,
            clientEmail: email,
            clientAddress: address,
            totalCost
        };
        axios.post('http://localhost:9000/orders', orderDetails)
            .then((response) => {
                if (response.data.acknowledged) {
                    toast.success('Placed Order Succesfully!')
                }else{
                    toast.error("Error :: Failed to place your Order!")
                };
            });
    };

    useEffect(() => {
        axios.get(`http://localhost:9000/products/${productID}`)
            .then((response) => {
                setProduct(response.data);
            })
    }, [ productID ])

    return (
        <div className='mx-10'>
            {
                !product ? <Loading /> :
                    <div className='flex space-x-5'>
                        <div className='md:w-2/3 flex border-2 rounded-lg p-5 m-2'>
                            <div className='md:w-1/2 md:p-10'>
                                <img className='w-full' src={product.productImage} alt="" />
                            </div>
                            <div className='md:w-1/2 my-auto'>
                                <h1 className="text-2xl font-medium text-pink-700 mb-2">{product.productName}</h1>
                                <p className='text-lg mb-2'>{product.productDescription}</p>
                                <p className='font-medium border rounded-lg bg-pink-50 py-2 text-lg'>Available for <span className='font-bold text-pink-700'>${product.productPrice}</span></p>
                            </div>
                        </div>
                        <div className='md:w-1/3 border-2 rounded-lg p-5 m-2'>
                            <h1 className="text-lg font-bold text-pink-700 block mb-2">Place Your Order</h1>
                            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="text-left">
                                    <label htmlFor="name" className="font-medium text-pink-600 block mb-1">Your Name</label>
                                    <input {...register("name")} type="text" id="name" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" defaultValue={user.displayName} required="" />
                                </div>
                                <div className="text-left">
                                    <label htmlFor="email" className="font-medium text-pink-600 block mb-1">Your Email</label>
                                    <input {...register("email")} type="email" id="email" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" defaultValue={user.email} required="" />
                                </div>
                                <div className="text-left">
                                    <label htmlFor="address" className="font-medium text-pink-600 block mb-1">Your Address</label>
                                    <textarea {...register("address")} rows={2} id="address" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" placeholder='Enter your full address here for shipments' required="" />
                                </div>
                                <div className="text-left">
                                    <label htmlFor="quantity" className="font-medium text-pink-600 block mb-1">Product Quantity</label>
                                    <input {...register("quantity")} type="number" id="quantity" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" defaultValue={1} min={1} required="" />
                                </div>
                                <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Place Order</button>
                            </form >
                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductPurchase;