import { Dispatch, createContext } from 'react';

const GlobalContext = createContext<{
    email: string;
    setEmail: Dispatch<string>;
    isActiveSession: boolean;
    setIsActiveSession: Dispatch<boolean>;
}>({
    email: '',
    setEmail: () => { },
    isActiveSession: false,
    setIsActiveSession: () => { },
});;

export default GlobalContext;