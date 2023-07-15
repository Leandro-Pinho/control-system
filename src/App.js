import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';

function App() {
  // localStorage é o local que guarda nossos dados
  const data = localStorage.getItem("transactions");
  // lista de dados
  const [transactionslist, setTransactionsList] = useState(data ? JSON.parse(data) : []);

  // aqui é a entrada, saida e total respectivamente
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionslist
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionslist
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  }, [transactionslist])

  const handleAdd = (transactions) => {
    const newArrayTransactions = [...transactionslist, transactions];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <div className="App">
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionslist={transactionslist} setTransactionsList={setTransactionsList} />
    </div>
  );
}

export default App;
