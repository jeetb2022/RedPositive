import './ExpenseForm.css';
import ReactDOM from 'react-dom'
import ErrorModal from '../UI/ErrorModal';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const titleChangeHandler = (ele) => {
        setTitle(ele.target.value);
    };
    const [price, setPrice] = useState("");
    const priceChangeHandler = (ele) => {
        setPrice(ele.target.value);
    };
    const [date, setDate] = useState("");
    const dateChangeHandler = (ele) => {
        setDate(ele.target.value);
    };
    
    const [error, seterror] = useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        if (price.trim().length === 0 || title.trim().length === 0) {
            seterror(true);
            return;
        }
        const expenseData = {
            title: title,
            price: price,
            date: new Date(date),
        }
        
        console.log(expenseData);
        props.onNewExpense(expenseData);
        setTitle("");
        setDate("");
        setPrice("");
    };
    
    const Backdrop = (props)=>{
        return (
            error ? <ErrorModal onCancel ={props.onCancel}/> : <div />
        );
    }
    const clickHandler = () => {
        props.disappearForm();
    }

    const onCancelHandler = () => {
        seterror(false);
    }


    return (
        <div>
            {/* {error ? <ErrorModal onCancel={onCancelHandler} /> : <div />}; */}
           {ReactDOM.createPortal(
            <Backdrop onCancel={onCancelHandler}/>,document.getElementById('backdrop')) }
            <form onSubmit={submitHandler}>
                <div className="new-expense_controls">
                    <div className="new-expense_control">
                        <label>Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense_control">
                        <label>Date</label>
                        <input type="date" value={date} onChange={dateChangeHandler} />
                    </div>
                    <div className="new-expense_control">
                        <label>Price</label>
                        <input type="number" value={price} onChange={priceChangeHandler} />
                    </div>

                </div>
                <div className="new-expense_action">
                    <button onClick={clickHandler}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
};

export default ExpenseForm;
