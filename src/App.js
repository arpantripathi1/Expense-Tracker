import React , { useState } from "react";

import Expenses from "./components/ExpenseRelated/Expenses";
import NewExpense from "./components/InputExpense/NewExpense";


let dummyExpenses = [
  {
    id: "e1",
    title: "car insurance",
    date: new Date(2028, 1, 13),
    amount: 340,
  },

  {
    id: "e2",
    title: "life insurance",
    date: new Date(2030, 4, 21),
    amount: 200,
  },

];


function App(props) {

  const [expenses , setExpenses] = useState(dummyExpenses);
  
  function addExpenseDataHandler(receivedExpense) {
    const updatedExpense = [receivedExpense, ...expenses];
    setExpenses(updatedExpense);
    // it will not update or add the list,we have to use useState to update anything
    // dummyExpenses[dummyExpenses.length -1] = receivedExpense ;
  }

  return (
    <div>
      <NewExpense addNewExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
