import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";
function ExpenseItem(props) {
  const deleteHandler = () => {
    console.log("deleted")
    props.onDelete(props.id);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        <button className="delete-button" onClick={deleteHandler}>
          <RiDeleteBin5Line  />
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
