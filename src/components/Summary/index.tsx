import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import formatNumber from '../../utils/formatNumber';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const {deposits, total, withdraw} = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    }
    else {
      acc.withdraw -= transaction.amount      
      acc.total -= transaction.amount      
    }

    return acc
  },{
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>+ {formatNumber(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="income" />
        </header>
        <strong> {formatNumber(withdraw)}</strong>
      </div>
      <div className='highligth-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="income" />
        </header>
        <strong>{formatNumber(total)}</strong>
      </div>
    </Container>
  )
}