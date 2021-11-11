import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Reviews from '../Reviews/Reviews';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner />
            <TopProducts />
            <Reviews />
            <Offers />
        </div>
    );
};

export default Home;