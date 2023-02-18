import "./Expenses.css";

// components
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      title: "Grajdanska otgovornost",
      amount: 294.67,
      date: new Date(2022, 12, 17),
    },
    {
      id: 2,
      title: "Vinetka",
      amount: 97.0,
      date: new Date(2022, 12, 17),
    },
    {
      id: 3,
      title: "Techicneski pregled",
      amount: 50.0,
      date: new Date(2022, 12, 17),
    },
  ];

  return (
    <Card className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
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
