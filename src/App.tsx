import { useState } from "react";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Transactions } from "./components/Transactions";
import { SearchForm } from "./components/SearchForm";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";
import { GlobalStyle } from "./styles/global";

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
    <TransactionsContext.Provider value={[]}>
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
    </TransactionsContext.Provider>
  )
}
