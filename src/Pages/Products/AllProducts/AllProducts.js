import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const AllProducts = () => {
    const { token } = useProvider();
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        axios.get('https://baby-care-planet.herokuapp.com/products', { headers: { 'authorization': `Bearer ${token}` } })
            .then((result) => {
                setProducts(result.data);
            }).catch((err) => {
            });
    }, [ token ]);

    const handleDeleteProduct = (productID) => {
        if (window.confirm("Do you really want to remove this?")) {
            axios.delete(`https://baby-care-planet.herokuapp.com/products/?productID=${productID}`)
                .then((result) => {
                    if (result.data.deletedCount === 1) {
                        const newProducts = products.filter(element => element._id !== productID)
                        setProducts(newProducts);
                        toast.success('Product removed succesfully!')
                    }
                }).catch((err) => {
                    toast.error('Could not remove the product!')
                });
        };
    };

    return (
        <div className='md:mx-10 '>
            <h1 className='text-3xl font-semibold my-10'>Manage Your Orders</h1>
            <div>
                <table class="table-auto w-full">
                    <thead>
                        <tr className='text-lg text-pink-700'>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <td className='h-20'><img className='h-full' src={product.productImage} alt={product.productName} /></td>
                                <td>{product.productName}</td>
                                <td>{product.productDescription.split(' ').slice(0, 10).toString().replace(/,/g, ' ') + '...'}</td>
                                <td>{product.productPrice}</td>
                                <td><button className='border-2 rounded-lg p-2 bg-pink-500 text-white' onClick={() => handleDeleteProduct(product._id)}>Delete this Product</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;