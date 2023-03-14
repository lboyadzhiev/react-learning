import React from 'react';

// styles
import classes from './ExpenseDate.module.css';

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('ens-US', { month: 'long' });
  const day = date.toLocaleString('en-Us', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className={classes['expense-date']}>
      <div className={classes['expense-date__month ']}>{month}</div>
      <div className={classes['expense-date__day']}>{day}</div>
      <div className={classes['expense-date__year']}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
