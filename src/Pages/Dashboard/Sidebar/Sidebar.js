import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import useProvider from '../../../Hooks/useProvider';

const Sidebar = () => {
    const { isAdmin, logOut } = useProvider();
    const { url } = useRouteMatch();
    return (
        <nav className="px-5 py-20  bg-pink-50 rounded-lg">
            {
                isAdmin ?
                    <div className="flex flex-col space-y-5">
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/allorders`}
                        >
                            All Orders
                        </NavLink>
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/allproducts`}
                        >
                            All Products
                        </NavLink>
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/addproducts`}
                        >
                            Add Product
                        </NavLink>
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/makeadmin`}
                        >
                            Make Admin
                        </NavLink>
                        <button onClick={logOut} className="w-20 md:w-auto px-5 py-3  text-white font-bold bg-pink-700 hover:bg-pink-600 ml-1 rounded-lg">
                            <i class="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                    </div> :
                    <div className="flex flex-col space-y-5">
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/orders`}
                        >
                            My Orders
                        </NavLink>
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/review`}
                        >
                            Review
                        </NavLink>
                        <NavLink
                            activeClassName="border-b-4 border-yellow-400"
                            className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg"
                            to={`${url}/payment`}
                        >
                            Payment
                        </NavLink>
                        <button onClick={logOut} className="w-20 md:w-auto py-3 text-white font-semibold border-b-4 bg-pink-700 hover:bg-pink-600 rounded-lg">
                            <i class="fas fa-sign-out-alt"></i> Sign Out
                        </button>
                    </div>
            }
        </nav>
    );
};

export default Sidebar;