import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating';

const Reviews = () => {
    const [ reviews, setReviews ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/reviews')
            .then(response => {
                const data = response.data;
                const slicedData = data.slice(0, 6);
                setReviews(slicedData);
            });
    }, [])
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl text-left font-semibold text-right my-10'>Latest Customer <span className='text-pink-700 font-bold'>Reviews ...</span></h1>
            </div>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(review => <div key={review._id} className='bg-pink-100 shadow-xl rounded-lg p-3 h-40'>
                        <h1 className='text-2xl mt-2 text-pink-700'>{review.reviewer}</h1>
                        <RatingView ratingValue={review.reviewRating} />
                        <p className='mt-1'>{review.reviewContext}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;