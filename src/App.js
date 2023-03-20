import React, { useState, useEffect } from 'react';

// custom hooks
import useServices from './hooks/use-services.js';

//components
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([]);
  const { isLoading, error, sendRequest: fetchExpenses } = useServices();

  useEffect(() => {
    const transoformExpenses = (data) => {
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

    fetchExpenses(
      {
        url: 'https://expenses-2f187-default-rtdb.firebaseio.com/expenses.json',
      },
      transoformExpenses
    );
  }, [fetchExpenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => prevExpenses.concat(expense));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
