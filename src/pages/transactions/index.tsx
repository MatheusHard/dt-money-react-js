import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";



export function Transactions() {

    const { transactions } = useContext(TransactionContext)
   
    
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        {
                        transactions.map((t)=> {
                            return(
                                <tr key={t.id}>
                                    <td width="50%">{ t.description }</td>
                                    <td>
                                        <PriceHighLight variant={ t.type }>
                                            { t.price }
                                        </PriceHighLight>
                                    </td>
                                    <td> { t.createdAt } </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
 }