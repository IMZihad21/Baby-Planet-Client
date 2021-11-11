import React from 'react';

const ProductDetails = ({ product }) => {
    const { productName, productImage, productDescription } = product;
    return (
        <div className='bg-white shadow-xl rounded-lg p-3 h-80'>
            <div className='w-1/2 mx-auto'>
                <img className='w-full h-full' src={productImage} alt={productName} />
            </div>
            <h1 className='text-2xl mt-2 text-pink-700'>{productName}</h1>
            <p className='mt-1'>{productDescription.split(' ').slice(0, 10).toString().replace(/,/g, ' ') + '...'}</p>
            <button className='bg-pink-700 rounded-lg mt-2 w-full text-white py-2'><i class="fas fa-cart-plus"></i> Purchase</button>
        </div>
    );
};

export default ProductDetails;