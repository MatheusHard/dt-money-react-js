import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="que onda é essa, iáháháháháhá"/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Pesquisar
            </button>
        </SearchFormContainer>
    )
}