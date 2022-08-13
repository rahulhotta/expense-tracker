import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");
  const filterByYear = (data) => {
    return data.date.getFullYear().toString() === expenseFilter;
  };
  const result = props.expenses.filter(filterByYear);


  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={result}/>
        <ExpensesFilter
          setExpenseFilter={setExpenseFilter}
          expenseFilter={expenseFilter}
        />
        <ExpensesList result={result} onDelete={props.onDelete}/>
      </Card>
    </div>
  );
}

export default Expenses;
