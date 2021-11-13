import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useProvider from '../../../Hooks/useProvider';

const AllOrders = () => {
    const { token } = useProvider();
    const [ orders, setOrders ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/allorders', { headers: { 'authorization': `Bearer ${token}` } })
            .then((result) => {
                setOrders(result.data);
            }).catch((err) => {
            });
    }, [ token ]);

    const handleOrderApproval = orderID => {
        if (window.confirm("Do you want to approve this order?")) {
            axios.put(`http://localhost:9000/orders/?orderID=${orderID}`)
                .then((result) => {
                    if (result.data.modifiedCount === 1) {
                        const newOrders = orders.map(element => element._id === orderID ? { ...element, orderPending: false } : element);
                        setOrders(newOrders);
                        toast.success('Order Approved succesfully!')
                    }
                }).catch((err) => {
                    toast.error('Could not approve the order!')
                });
        };
    };

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
                                <td>{order.orderPending ?
                                    <button className='border-2 rounded-lg p-2 bg-pink-500 text-white' onClick={() => handleOrderApproval(order._id)}>Approve Order</button> :
                                    <span className='border-2 rounded-lg p-2 bg-green-100 px-5'> Delivered </span>}</td>
                                <td><button className='border-2 rounded-lg p-2 bg-pink-500 text-white' onClick={() => handleDeleteOrder(order._id)}>Delete this Order</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;