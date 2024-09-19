import { useState } from "react"
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />
                <NewTransactionButton onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </NewTransactionButton>
                <Modal 
                    isOpen={isNewTransactionModalOpen} 
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}