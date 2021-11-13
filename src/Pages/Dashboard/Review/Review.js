import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const Review = () => {
    const { user } = useProvider();
    const { register, handleSubmit } = useForm();
    const [ reviewRating, setReviewRating ] = useState(0);
    const handleRating = (rate) => {
        setReviewRating(rate);
    };
    const onSubmit = formData => {
        const { reviewer, reviewContext } = formData;
        if (reviewer === '' || reviewContext === '' || reviewRating === 0) {
            toast.error('Please fill all the fields before submitting')
            return;
        }
        const reviewData = { reviewer, reviewContext, reviewRating }
        axios.post('http://localhost:9000/reviews', reviewData)
            .then((response) => {
                if (response.data.acknowledged) {
                    toast.success('Submitted Review Succesfully!')
                } else {
                    toast.error("Error :: Failed to submit review!")
                };
            });
    };
    return (
        <div className='m-10 flex'>
            <div className='w-1/2'>
                <img className='w-full h-full rounded-xl' src="https://i.ibb.co/WBYtkdH/reviewbanner.jpg" alt="" />
            </div>
            <div className='w-1/2 px-5'>
                <h1 className="text-lg font-bold text-pink-700 block mb-2">Place Your Order</h1>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-left">
                        <label htmlFor="reviewContext" className="font-medium text-pink-600 block mb-1">Rate Our Service</label>
                        <Rating onClick={handleRating} className="text-md p-2.5" ratingValue={reviewRating} />
                    </div>
                    <div className="text-left">
                        <label htmlFor="reviewer" className="font-medium text-pink-600 block mb-1">Your Name</label>
                        <input {...register("reviewer")} type="text" id="reviewer" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" defaultValue={user.displayName} required="" />
                    </div>
                    <div className="text-left">
                        <label htmlFor="reviewContext" className="font-medium text-pink-600 block mb-1">Your Review</label>
                        <textarea {...register("reviewContext")} rows={2} id="reviewContext" className="bg-pink-50 border border-pink-700 text-md rounded-lg w-full p-2.5 mb-2" placeholder='What do you think about our service?' required="" />
                    </div>
                    <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-600 font-medium rounded-lg py-2.5">Submit Review</button>
                </form >
            </div>
        </div>
    );
};

export default Review;