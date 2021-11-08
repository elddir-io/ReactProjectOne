import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* the nameing is following convention, not react syntax*/}
        </div>
    )
};

export default NewExpense;





