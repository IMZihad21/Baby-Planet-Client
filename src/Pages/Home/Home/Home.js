import React from 'react';
import Banner from '../Banner/Banner';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner />
            <TopProducts />
        </div>
    );
};

export default Home;