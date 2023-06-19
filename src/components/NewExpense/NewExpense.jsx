import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const stopEditing = () =>{
    setIsEditing(false);

  }

    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        };

        props.onAddExpense(expenseData);
        setIsEditing(false);

    };
    const startEditingHandler = () =>{
      setIsEditing(true);




    }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm  onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
