import React,{useState} from "react";

import "./ExpenseForm.css";

function ExpenseForm(props){


    let [ enteredTitle , setEnteredTitle ]   = useState("");
    let [ enteredAmount , setEnteredAmount ] = useState('');
    let [ enteredDate , setEnteredDate ]     = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value) ;
    }

     function amountChangeHandler(event) {
        setEnteredAmount(event.target.value) ;
    }

     function dateChangeHandler(event) {
        setEnteredDate(event.target.value) ;
     }

     function submitHandler(event) {
        event.preventDefault(); // default nature of form is when we submit form it refresh atomatically

        const newExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //thats how we send data from child to parent i.e. NewExpense.js ...so that it can reach to app.js and from there send to ExpenseItem.js
          props.onSubmitExpenseData(newExpenseData) ;
        // after submitting form input values should be blank
        setEnteredTitle("") ;
        setEnteredAmount("") ;
        setEnteredDate("") ;

     }

    return (
      <form onSubmit={ submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={ enteredTitle }
              onChange={ titleChangeHandler }
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={ enteredAmount } onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={ enteredDate } onChange={ dateChangeHandler } />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </form>
    );
}

export default ExpenseForm ;