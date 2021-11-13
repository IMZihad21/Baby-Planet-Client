import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const AllOrders = () => {
    const { user, token } = useProvider();
    const [ orders, setOrders ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/allorders', { headers: { 'authorization': `Bearer ${token}` } })
            .then((result) => {
                setOrders(result.data);
            }).catch((err) => {
            });
    }, [ user.email ]);

    const handleDeleteOrder = (orderID) => {
        if (window.confirm("Do you really want to remove this?")) {
            axios.delete(`http://localhost:9000/orders/?orderID=${orderID}`)
                .then((result) => {
                    if (result.data.deletedCount === 1) {
                        const newOrders = orders.filter(element => element._id !== orderID)
                        setOrders(newOrders);
                        toast.success('Order removed succesfully!')
                    }
                }).catch((err) => {
                    toast.error('Could not remove the order!')
                });
        };
    };

    return (
        <div className='mx-10'>
            <h1 className='text-3xl font-semibold my-10'>Manage Your Orders</h1>
            <div>
                <table class="table-auto w-full">
                    <thead>
                        <tr className='text-lg text-pink-700'>
                            <th>Client</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                            <th>Pending Status</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr key={order._id}>
                                <td>{order.clientName}</td>
                                <td>{order.clientAddress}</td>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.totalCost}</td>
                                <td>{order.orderPending ? "Pending" : "Delivered"}</td>
                                <td><button className='border-2 rounded-lg p-2' onClick={() => handleDeleteOrder(order._id)}>Delete this Order</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {/* 
                {
                    orders.map(order => <div className='flex justify-between text-lg text-left font-semibold' key={order._id}>
                        <h1 className='w-1/8'>{order.productName}</h1>
                        <h1 className='w-1/8'>{order.clientName}</h1>
                        <p className='w-1/8'>{order.clientAddress}</p>
                        <p className='w-1/8'>{order.orderPending ? "Pending" : "Delivered"}</p>
                        <p className='w-1/8'>{order.productQuantity}</p>
                        <p className='w-1/8'>{order.totalCost}</p>
                        <button className='w-1/8' onClick={() => handleDeleteOrder(order._id)}>Delete this Order</button>
                    </div>)
                } */}
            </div>
        </div>
    );
};

export default AllOrders;