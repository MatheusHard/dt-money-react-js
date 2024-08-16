import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "../pages/interfaces/Transaction";
import { api } from "../lib/axios";





interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode; 
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionProvider({children} : TransactionProviderProps) {

    const [ transactions, setTransacoes ] = useState<Transaction[]>([])
    
    async function fetchTransactions(query?: string) {
       
        const response = await api.get('/transactions', {
            params: {
                _sort:  'createdAt',
                //_order: 'desc',
                description: query
            }
       });

        setTransacoes(response.data);

    }

    useEffect(() => {
        fetchTransactions();
    }, [])
    
    return (
        <TransactionContext.Provider value={{ transactions, fetchTransactions, }}>
            {children}
        </TransactionContext.Provider>
    ) 
}