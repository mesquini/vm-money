import Modal from 'react-modal';

import {} from './styles'

interface INewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal ({isOpen, onRequestClose}:INewTransactionsModalProps) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h1>oi</h1>
    </Modal>
  );
}