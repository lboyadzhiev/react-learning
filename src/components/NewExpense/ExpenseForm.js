import React, { useState } from 'react';

// styles
import classes from './ExpenseForm.module.css';

const ExpenseForm = ({ onSaveExpenseData, onCloseForm }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmoumnt] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmoumnt(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmoumnt('');
    setEnteredDate('');

    onCloseForm();
  };

  const cancelHandler = () => {
    onCloseForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className={classes['new-expense__control']}>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className={classes['new-expense__control']}>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2020-01-01 '
            max='2023-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes['new-expense__actions']}>
        <button onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
