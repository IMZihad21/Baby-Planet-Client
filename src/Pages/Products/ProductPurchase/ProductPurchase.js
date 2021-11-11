import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../Shared/Loading/Loading';

const ProductPurchase = () => {
    const [ product, setProduct ] = useState({})
    const { productID } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:9000/products/${productID}`)
            .then((response) => {
                setProduct(response.data);
            })
    }, [ productID ])
    return (
        <div>
            {
                !product ? <Loading /> : <div className='flex'>
                    <div className='md:w-1/2 p-20'>
                        <img className='w-full' src={product.productImage} alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <h1>{product.productName}</h1>
                        <p>{product.productDescription}</p>
                        <p>Available for ${product.productPrice}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductPurchase;