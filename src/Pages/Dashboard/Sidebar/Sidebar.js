import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    const { url } = useRouteMatch();
    return (
        <nav className="px-5 py-32  bg-pink-50 rounded-lg">
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
            </div>
        </nav>
    );
};

export default Sidebar;