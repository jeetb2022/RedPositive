import '../Expenses/ExpenseDate.css';

function ExpenseDate(props) {
    const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
    const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
    const expenseYear = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date_Month">{expenseMonth}</div>
            <div className="expense-date_Day">{expenseDay}</div>
            <div className="expense-date_Year">{expenseYear}</div>
        </div>
    );

}
export default ExpenseDate;