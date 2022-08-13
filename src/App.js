import "./App.css";
import React, { useState } from "react"; 
import Expenses from './Components/Expenses/Expenses'
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "New Chair",
      amount: 294,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 1877, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 1294,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 1450,
      date: new Date(2021, 5, 12),
    },
  ])

  const addExpenseHandler = expenseData => {
    setExpenses((prevExpense)=> {
      return [expenseData,...prevExpense];
    });
    console.log(expenses)
  }

  const deleteItemHandler = expenseId => {
    setExpenses(() =>{
      const updatedExpenses = expenses.filter((currentExpense)=> {
       return  currentExpense.id !== expenseId
      });
      return updatedExpenses;
    })
  }
  return (
    <div className="App">
      {/* Adding new expenses */}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses} onDelete={deleteItemHandler}/>
        {/* Managing the current expenses */}
    </div>
  );
}

export default App;


