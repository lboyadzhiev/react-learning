import React, { useState } from 'react';

// style
import classes from './Expenses.module.css';

// components
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
