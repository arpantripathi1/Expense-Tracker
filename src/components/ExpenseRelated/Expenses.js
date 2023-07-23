import React from "react";

import "./Expenses.css";

import BorderCard from "../Border/BorderCard";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <BorderCard className="expenses-div">
      {
        props.items.map(
            (item) => (
                <ExpenseItem
                  date={item.date}
                  title={item.title}
                  amount={item.amount}
                />
            )
        )
      } 
    </BorderCard>
  );
}

export default Expenses;
