import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AdminRoute from '../../../Utilities/AdminRoute/AdminRoute';
import AllOrders from '../AllOrders/AllOrders';
import Order from '../Orders/Order';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';
import Welcome from '../Welcome/Welcome';

const Dashboard = () => {
    const { path } = useRouteMatch();
    return (
        <div className='flex mx-10'>
            <div className='w-1/6'>
                <Sidebar />
            </div>
            <div className='w-5/6'>
                <Switch>
                    <Route exact path={path}>
                        <Welcome />
                    </Route>
                    <Route path={`${path}/orders`}>
                        <Order />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <AdminRoute path={`${path}/allorders`}>
                        <AllOrders />
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;