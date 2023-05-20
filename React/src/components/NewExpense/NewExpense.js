import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props)=>{

    const [flag, setFlag] = useState(0);
    const clickHandler = () => {
        setFlag(1);
    };

    const newExpenseHandler = (newExpense) => {
        const newExpenseObject = {
            ...newExpense,
            id: Math.random().toString(),
        }
        props.onlatestExpense(newExpenseObject);
        disappearForm();
    };

    const disappearForm = () => {
        setFlag(0);
    };

    if (flag === 0) {
        return (
            <div className="new-expense">
 <button onClick={clickHandler}>
                Add New Expense
            </button>    </div>
           
        )
    };
    return (
        <div className="new-expense">
        <ExpenseForm flag={flag} disappearForm={disappearForm} onNewExpense={newExpenseHandler} />
    </div>
    );


};

export default NewExpense;