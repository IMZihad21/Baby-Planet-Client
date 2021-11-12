import React from 'react';

const NotFound = () => {
    return (
        <div className="m-auto py-16 w-9/12 flex items-center justify-center">
            <div className="bg-pink-50 shadow overflow-hidden sm:rounded-lg pb-8">
                <div className="text-center pt-8">
                    <h1 className="text-9xl font-bold text-red-400">404</h1>
                    <h1 className="text-6xl font-medium py-8">Oops! The page you are looking for does not exist. </h1>
                    <p className="text-2xl pb-8 px-12 font-medium">It might have been moved or deleted.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;