import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  if (props.result.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else {
    return (
      <div className="expenses-list">
        {props.result.map((expense) => {
          return (
            <ExpenseItem
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default ExpensesList;
