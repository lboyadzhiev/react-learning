import React from 'react';

// style
import './Expenses.css';

// components
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
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
