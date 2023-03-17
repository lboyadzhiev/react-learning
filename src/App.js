import React, { useState, useEffect } from 'react';

// services
import { createExpense, getExpenses } from './services/expensesServisec.js';
//components
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);

  const getData = async () => {
    const data = await getExpenses();
    const loadedExpenses = [];

    for (const key in data) {
      loadedExpenses.push({
        id: key,
        amount: data[key].amount,
        date: new Date(data[key].date),
        title: data[key].title,
      });
    }

    setExpenses(loadedExpenses);
  };

  const addExpenseHandler = async (expense) => {
    await createExpense(expense);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
