import { useContext } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



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
                                            { priceFormatter.format(t.price) }
                                        </PriceHighLight>
                                    </td>
                                    <td>{ dateFormatter.format(new Date(t.createdAt)) }</td>
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