import React, { useState } from 'react';

// style
import classes from './Expenses.module.css';

// components
import ExpensesList from './components/ExpensesList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpensesChart from './components/ExpensesChart';
import ExpensesGraph from './components/ExpensesGraph';
import Card from '../UI/Card';

const Expenses = ({ expenses, isLoading, error }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log('expenses', expenses);
  const filteredExpenses = expenses.filter((expense) => {
    console.log('expense', expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={classes['expenses']}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* <ExpensesChart expenses={filteredExpenses} /> */}
      <ExpensesGraph />
      {isLoading && <p className={classes.sideMessage}>Loading...</p>}
      {!isLoading && !error && <ExpensesList items={filteredExpenses} />}
      {!isLoading && error && <p className={classes.sideMessage}>{error}</p>}
    </Card>
  );
};

export default Expenses;
