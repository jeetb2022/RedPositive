import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';

function ExpenseItem (props){
    const expenseTitle =props.title ; 
    const expensePrice =props.price ; 
    const expenseDate = props.date;

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price" >${expensePrice}</div>
            </div>
        </Card>
        </li>
    );
}
export default ExpenseItem;