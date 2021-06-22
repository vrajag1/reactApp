import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
export default function NewExpense(props) {
  const [isEditing, setEditing] = useState(false);
  const handleExpenseDataSave = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };

  const HandleCancelButton = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add an Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onExpenseDataSubmit={handleExpenseDataSave}
          stopEditing={HandleCancelButton}
        />
      )}
    </div>
  );
}
