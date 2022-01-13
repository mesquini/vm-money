import Modal from 'react-modal';

import { GlobalStyle } from "./styles/globa";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal} />
      
      <Dashboard />

      <NewTransactionsModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
