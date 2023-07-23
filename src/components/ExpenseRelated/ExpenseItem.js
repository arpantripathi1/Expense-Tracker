import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import BorderCard from "../Border/BorderCard";

function ExpenseItem(props) { 
  return (
    <BorderCard className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </BorderCard>
  );
}

export default ExpenseItem;
