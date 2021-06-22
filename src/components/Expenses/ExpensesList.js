import React from "react";
import ExpenseItem from "./ExpenseItem";
export default function ExpensesList(Props) {
  if (Props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Cont</h2>;
  }
  return (
    <ul className="expenses-list">
      {Props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
