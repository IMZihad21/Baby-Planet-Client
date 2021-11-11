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
            <div className='bg-pink-700 rounded-lg divide-x divide-white mt-2'>
                <button className='text-white py-2 pr-2'><i class="fas fa-info-circle"></i> Check Details</button>
                <button className='text-white py-2 pl-2'><i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;