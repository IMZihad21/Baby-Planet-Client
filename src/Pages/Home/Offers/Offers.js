import React from 'react';

const Offers = () => {
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl text-left font-semibold my-10'>Hot <span className='text-pink-700 font-bold'>Offers ...</span></h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='bg-pink-100 rounded-lg p-4'>
                    <i class="far fa-clock text-5xl text-white -mt-12 bg-pink-700 p-5 rounded-full"></i>
                    <h1 className='text-2xl font-semibold'>Great Saving Everyday</h1>
                    <p className='mt-2'>Certain everyday items, like groceries, toiletries, and cosmetics, will always go on sale sooner or later, providing an opportunity for you to stock up when your favorite brands are priced at a discount.</p>
                </div>
                <div className='bg-pink-100 rounded-lg p-4'>
                    <i class="fas fa-star-half text-5xl text-white -mt-12 bg-pink-700 p-5 rounded-full"></i>
                    <h1 className='text-2xl font-semibold'>Half Price Sell</h1>
                    <p className='mt-2'>We do regula campains for products that goes to flash sale with half the price. Keep checking our store to know when the campain runs to collects your favourite item at half the price.</p>
                </div>
                <div className='bg-pink-100 rounded-lg p-4'>
                    <i class="far fa-money-bill-alt text-5xl text-white -mt-12 bg-pink-700 p-5 rounded-full"></i>
                    <h1 className='text-2xl font-semibold'>Extra 15% Cashback</h1>
                    <p className='mt-2'>Baby Care provides cashback service on purchasing products totals of $100. Up to 15% cashback is provided if you fullfill the requirements</p>
                </div>
            </div>
        </div>
    );
};

export default Offers;