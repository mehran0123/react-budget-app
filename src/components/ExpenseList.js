import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    {
      id: 12323,
      name: "Shopping",
      cost: 50,
    },
    {
      id: 12323,
      name: "Holiday",
      cost: 100,
    },
    {
      id: 12323,
      name: "Transportation",
      cost: 200,
    },
    {
      id: 12323,
      name: "Fuel",
      cost: 500,
    },
    {
      id: 12323,
      name: "Child Care",
      cost: 1200,
    },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
