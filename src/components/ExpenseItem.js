import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const deleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item dflex justify-content-between align-item-center">
      {props.name}
      <div>
        <b className="">PKR {props.cost}</b>
        <TiDelete size="1.5em" onClick={deleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
