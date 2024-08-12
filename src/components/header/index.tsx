import { HeaderContainer, HeaderContent, NewTrancationButton } from "./styles";
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={ logo } alt="logos"/>
                <NewTrancationButton>New Transaction</NewTrancationButton>
            </HeaderContent>
        </HeaderContainer>
    )
 }