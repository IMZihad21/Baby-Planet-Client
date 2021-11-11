import React from 'react';
import { Redirect, Route } from 'react-router';
import useProvider from '../../Hooks/useProvider';
import Loading from '../../Pages/Shared/Loading/Loading';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useProvider();
    if (loading) return (
        <Loading />
    );
    return (
        <Route
            {...rest}
            render={({ location }) => user.uid ?
                (children) :
                (<Redirect
                    to={{
                        pathname: "/authentication",
                        state: { from: location }
                    }}
                />)}
        />
    );
};

export default PrivateRoute;