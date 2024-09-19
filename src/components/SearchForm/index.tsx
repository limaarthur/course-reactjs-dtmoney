import searchImg from "../../assets/search.svg"
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Buscar por transações" />

            <button type="submit">
                <img src={searchImg} alt="Buscas" />
                Buscar
            </button>
        </SearchFormContainer>
    );
}