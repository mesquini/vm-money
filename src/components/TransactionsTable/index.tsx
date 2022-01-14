import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles'

import deleteImg from '../../assets/delete.svg'

export function TransactionsTable() {
  const {transactions, deleteTransaction} = useTransactions();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Deletar</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>
                {transaction.title}
              </td>
              <td className={transaction.type}>
                {transaction.type === 'deposit' ? '+ ' : '- '} 
                {new Intl.NumberFormat('pt-BR',{
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>
                {transaction.category}
              </td>
              <td>
                {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(transaction.createdAt))}
              </td>
              <td>
                <button type="button" onClick={() => deleteTransaction(transaction.id)}>
                  <img src={deleteImg} alt="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}