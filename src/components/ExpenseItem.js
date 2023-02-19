import React, { useState } from "react";

// style
import "./ExpenseItem.css";

// components
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
