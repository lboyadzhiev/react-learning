import React, { useState } from 'react';

// style
import './Expenses.css';

// components
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
