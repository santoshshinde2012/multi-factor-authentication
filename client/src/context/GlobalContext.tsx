import { Dispatch, createContext } from 'react';

const GlobalContext = createContext<{
    email: string;
    setEmail: Dispatch<string>;
}>({
    email: '',
    setEmail: () => { }
});;

export default GlobalContext;