import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

    const { fetchTransactions } = useContext(TransactionContext);

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting }
     } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

   async function handleSearchTransactions(data: SearchFormInputs) {
        
        //await new Promise(resolve => setTimeout(resolve, 2000));
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={ handleSubmit(handleSearchTransactions) }>
            <input type="text" placeholder="que onda é essa, iáháháháháhá" {...register('query')}/>
            <button type="submit" disabled={ isSubmitting }>
                <MagnifyingGlass size={20}/>
                Pesquisar
            </button>
        </SearchFormContainer>
    )
}