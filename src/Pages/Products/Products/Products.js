import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductDetails from '../../Products/ProductDetails/ProductDetails';

const Products = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/products')
            .then((response) => {
                const data = response.data;
                setProducts(data);
            });
    }, [])
    return (
        <div className='mt-5 mx-10'>
            <div>
                <h1 className='text-3xl font-semibold my-10'>Explore All  <span className='text-pink-700 font-bold'>Products </span></h1>
            </div>
            <div className='mt-2 rounded-lg p-5 grid grid-cols-4 gap-3'>
                {
                    products.map(product => <ProductDetails key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;