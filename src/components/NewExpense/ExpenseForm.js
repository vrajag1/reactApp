import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [ExpenseData, setExpenseData] = useState({});
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const handleformsubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onExpenseDataSubmit(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    // console.log(enteredTitle);
  };
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleCancelButton = () => {
    props.stopEditing();
  };
  return (
    <form onSubmit={handleformsubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label className="new-expense__controls label">Title</label>
          <input
            className="new-expense__controls input"
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__controls label">Amount</label>
          <input
            className="new-expense__controls input"
            type="text"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__controls label">Date</label>
          <input
            className="new-expense__controls input"
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={handleCancelButton}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
