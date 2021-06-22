import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

export default function Expenses(Props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onSaveYearChange = (year) => {
    setSelectedYear(year);
  };
  const filteredExpense = Props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          onYearChange={onSaveYearChange}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}
