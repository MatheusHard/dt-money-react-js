import { HeaderContainer, HeaderContent, NewTrancationButton } from "./styles";
import logo from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={ logo } alt="logos"/>
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTrancationButton>New Transaction</NewTrancationButton>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
 }