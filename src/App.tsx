import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Transactions } from "./components/Transactions";
import { SearchForm } from "./components/SearchForm";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [ IsNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Summary />
      <SearchForm />
      <Transactions />
      <NewTransactionModal 
        isOpen={IsNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
