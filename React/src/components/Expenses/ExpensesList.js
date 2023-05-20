import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return (<h2 className='expenses-list_fallback'>Found No expense </h2>);
    }
    return (
        <ul className='expenses-list'>
            {props.filteredExpenses.map((expense) => {
                return (
                    <ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />
                );
            })
            }
        </ul>
    );
};

export default ExpensesList;