import logoImg from "../../assets/logo.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <NewTransactionButton onClick={onOpenNewTransactionModal}>
                    Nova transação
                </NewTransactionButton>
                
            </HeaderContent>
        </HeaderContainer>
    )
}