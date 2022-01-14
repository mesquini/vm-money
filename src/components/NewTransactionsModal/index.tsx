import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface INewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal ({isOpen, onRequestClose}:INewTransactionsModalProps) {
  const [typeTransaction, setTypeTransaction] = useState<'deposit'|'withdraw'>('deposit')
  
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const {createTransaction} = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    await createTransaction(
      {
        title, 
        amount: value, 
        category, 
        type: typeTransaction
      }
    );

    setTitle('')
    setValue(0)
    setTypeTransaction('deposit')
    setCategory('')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Titulo" 
          type="text" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <input 
          placeholder="Valor" 
          type="number" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          required
        />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            isActive={typeTransaction === 'deposit'}
            activeColor="green"
            onClick={() => setTypeTransaction('deposit')}
          >
            <span>Entrada</span>
            <img src={incomeImg} alt="entrada" />            
          </RadioBox>
          <RadioBox 
            type='button' 
            isActive={typeTransaction === 'withdraw'}
            activeColor="red"
            onClick={() => setTypeTransaction('withdraw')}
          >
            <span>Saída</span>
            <img src={outcomeImg} alt="saida" />
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria" 
          type="text" 
          value={category}
          onChange={event => setCategory(event.target.value)}
          required
        />

        <button type="submit">Cadastrar</button>
      </Container>      
    </Modal>
  );
}