import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: string;
}

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
}

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData)

interface ITransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({children}: ITransactionsProviderProps) {
  const [transactions, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions')

      const data = localStorage.getItem('transactions')

      if(data){
        const dataJson = JSON.parse(data)
        setTransaction(dataJson);
      }else
        setTransaction(response.data.transactions);

    }

    getTransactions()
    
  }, [])

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('/transactions',
     {
       ...transactionInput,
       createdAt: new Date()
     }
    )
    const transaction = response.data.transactions;
    
    localStorage.setItem('transactions', JSON.stringify([...transactions, transaction]))
    setTransaction([...transactions, transaction]);
  }

  async function deleteTransaction(id: number) {
    await api.delete(`/transaction/${id}`)

    const filteredTransactions = transactions.filter(transaction => transaction.id !== id)
    
    localStorage.setItem('transactions', JSON.stringify(filteredTransactions))
    setTransaction(filteredTransactions);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context
}