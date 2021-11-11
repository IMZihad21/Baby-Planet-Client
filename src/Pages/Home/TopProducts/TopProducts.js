import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../../Products/ProductDetails/ProductDetails';

const TopProducts = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/products')
            .then((response) => {
                const data = response.data;
                const slicedData = data.slice(0, 6);
                setProducts(slicedData);
            });
    }, [])
    return (
        <div className='mt-5'>
            <div>
                <h1 className='text-3xl text-left font-semibold my-10'>Top <span className='text-pink-700 font-bold'>Sales ...</span></h1>
            </div>
            <div className='mt-2 bg-pink-100 rounded-lg p-5 grid grid-cols-4 gap-3'>
                {
                    products.map(product => <ProductDetails key={product._id} product={product} />)
                }
                <div className='bg-white shadow-xl rounded-lg p-3 h-80'>
                    <Link to='/products'>
                        <h1 className='text-2xl mt-36 text-pink-700'>All Products <i class="fas fa-arrow-right"></i></h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;