import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>
            <TransactionsContainer>
            <SearchForm/>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Dev Sites</td>
                        <td>
                            <PriceHighLight variant="income">
                                R$ 12.000,00
                            </PriceHighLight></td>
                        <td>13/04/5005</td>
                    </tr>
                    <tr>
                        <td>Gororoba</td>
                        <td>
                            <PriceHighLight variant="outcome">
                                - R$ 1.000,00
                            </PriceHighLight>
                        </td>
                        <td>13/04/5005</td>
                    </tr>
                    <tr>
                        <td>MAterial de construção</td>
                        <td>
                            <PriceHighLight variant="income">
                                R$ 22.000,00
                            </PriceHighLight>
                        </td>
                        <td>13/04/5005</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
 }