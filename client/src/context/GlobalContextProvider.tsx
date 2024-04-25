import React, { ReactNode, useState } from 'react';
import GlobalContext from './GlobalContext';

interface GlobalContextProviderProps {
    children: ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
    const [email, setEmail] = useState('');

    console.log('email1 ', email);
    
    return (
        <GlobalContext.Provider value={{ email, setEmail }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
