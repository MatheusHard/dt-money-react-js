import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "../pages/interfaces/Transaction";





interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionProviderProps {
    children: ReactNode; 
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({children} : TransactionProviderProps) {

    const [ transactions, setTransacoes ] = useState<Transaction[]>([])
    
    async function getAll() {

        const res = await fetch("http://localhost:3000/transactions");
        const data = await res.json();
        setTransacoes(data);
        console.log('lista', data)

    }

    useEffect(() => {
        getAll();
    }, [])
    
    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    ) 
}