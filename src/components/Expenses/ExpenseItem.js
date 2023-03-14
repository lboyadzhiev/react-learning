import React from 'react';

// style
import classes from './ExpenseItem.module.css';

// components
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className={classes['expense-item']}>
        <ExpenseDate date={date} />
        <div className={classes['expense-item__description']}>
          <h2>{title}</h2>
          <div className={classes['expense-item__price']}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
