import React, { useState } from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';

// style
import './NewExpense.css';

// components
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  const openFormHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className='new-expense'>
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeFormHandler}
        />
      )}
      {!isOpen && <button onClick={openFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
