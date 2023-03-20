import React, { useState } from 'react';

// style
import classes from './NewExpense.module.css';

// custom hooks
import useServices from '../../hooks/use-services';

// components
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, error, sendRequest: sendExpense } = useServices();

  const createExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    onAddExpense(expenseData);
  };

  const enterExpenseHandler = async (expense) => {
    sendExpense(
      {
        url: 'https://expenses-2f187-default-rtdb.firebaseio.com/expenses.json',
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: expense,
      },
      createExpense(expense)
    );
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  const openFormHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className={classes['new-expense']}>
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={enterExpenseHandler}
          onCloseForm={closeFormHandler}
        />
      )}
      {!isOpen && <button onClick={openFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
