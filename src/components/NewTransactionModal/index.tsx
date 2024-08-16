import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../lib/axios';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionsContext';


const newTransactionFormSchema = z.object({

    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),

})
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

const { fetchTransactions } = useContext(TransactionContext);


const { 
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
        } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
        type: 'income' //valores default do Formulario
    }
})

async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log('newTransactio', data);

    await api.post('transactions', {
        ...data,
        createdAt: new Date()
    });
//atualizar lista
await fetchTransactions();
reset()//fechar o modal
}

    return (
        <Dialog.Portal>
        <Overlay/>
        <Content>
            <Dialog.Title>Add Transaction</Dialog.Title>

            <CloseButton> <X size={24}/> </CloseButton>

            <form onSubmit={ handleSubmit(handleCreateNewTransaction) }>
                <input 
                    type="text"
                    placeholder="Descrição"
                    required
                    {...register('description')}
                />

                <input 
                    type="number"
                    placeholder="Preço"
                    required
                    {...register('price', { valueAsNumber: true })}
                />

                <input
                     type="text"
                     placeholder="Categoria"
                     required
                     {...register('category')}
                />
                {/**RADIO BUTTONS**/}
                <Controller
                    control={control}
                    name="type"
                    render={({ field }) => {
                        console.log('props_control', field);
                        return ( 
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton value='income' variant='income'>
                                    Entrada
                                    <ArrowCircleUp size={24}/>
                                </TransactionTypeButton>
                                
                                <TransactionTypeButton value='outcome' variant='outcome'>
                                    Saída
                                    <ArrowCircleDown size={24}/>
                                </TransactionTypeButton>
                            </TransactionType>)
                    }}
                />

               
              
                <button type="submit" disabled={ isSubmitting }>Cadastrar</button>
            </form>
        </Content>
    </Dialog.Portal>
    )
}