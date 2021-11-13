import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useProvider from '../../Hooks/useProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, loading } = useProvider();
    if (loading || !isAdmin) { return <Loading /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;