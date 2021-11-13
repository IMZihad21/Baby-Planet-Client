import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const { productName, productPrice, productImage, productDescription } = product;
    return (
        <div className='bg-white shadow-xl rounded-lg p-3 md:h-96'>
            <div className='w-1/2 mx-auto'>
                <img className='w-full rounded-lg h-full' src={productImage} alt={productName} />
            </div>
            <h1 className='text-2xl font-bold mt-2 text-pink-700'>{productName}</h1>
            <p className='mt-2 font-semibold'>{productDescription.split(' ').slice(0, 10).toString().replace(/,/g, ' ') + '...'}</p>
            <p className='mt-2 text-sm'>Available for $<span className='font-semibold text-lg'>{productPrice}</span></p>
            <Link to={`purchase/${product._id}`}>
                <button className='bg-pink-700 rounded-lg mt-4 w-full text-white py-2'><i class="fas fa-cart-plus"></i> Purchase</button>
            </Link>
        </div>
    );
};

export default ProductDetails;