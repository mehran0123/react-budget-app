import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   {
  //     id: 12323,
  //     name: "Shopping",
  //     cost: 50,
  //   },
  //   {
  //     id: 12323,
  //     name: "Holiday",
  //     cost: 100,
  //   },
  //   {
  //     id: 12323,
  //     name: "Transportation",
  //     cost: 200,
  //   },
  //   {
  //     id: 12323,
  //     name: "Fuel",
  //     cost: 500,
  //   },
  //   {
  //     id: 12323,
  //     name: "Child Care",
  //     cost: 1200,
  //   },
  // ];

  return (
    <ul className="list-group">
      {expenses.map((exp) => (
        <ExpenseItem id={exp.id} name={exp.name} cost={exp.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
