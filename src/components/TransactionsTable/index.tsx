

import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Container } from './styles'

export function TransactionsTable() {
  const [transactions, setTransaction] = useState();

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get('/transactions')
      
      setTransaction(response.data);
    }

    getTransactions()
    
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              PC gamer
            </td>
            <td className="deposit">
              + R$12000
            </td>
            <td>
              Desenvolvimento
            </td>
            <td>
              20/01/2020
            </td>
          </tr>
          <tr>
            <td>
              PC gamer
            </td>
            <td className="withdraw">
              - R$2000
            </td>
            <td>
              Desenvolvimento
            </td>
            <td>
              20/01/2020
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}