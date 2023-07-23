import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  // to take data from child
    function newExpenseDataHandler(receiver) {
        const NewExpenseData = {
          ...receiver //copying received object
        }
        props.addNewExpenseData(NewExpenseData) ;
    }


  return <div className="new-expense">
        <ExpenseForm onSubmitExpenseData = { newExpenseDataHandler } />
  </div>;
}

export default NewExpense;
