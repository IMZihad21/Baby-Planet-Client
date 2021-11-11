import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
    const firebase = useFirebase();
    const allContext = { ...firebase };
    return (
        <ContextData.Provider value={allContext}>
            {children}
        </ContextData.Provider>
    );
};

export default ContextProvider;