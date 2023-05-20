import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const expenses = [
  {
    id : Math.random().toString(),
    title: "Book",
    price: 2,
    date: new Date(2022, 10, 26)
  },
  {
    id : Math.random().toString(),
    title: "Bus Tickets",
    price: 4,
    date: new Date(2022, 9, 21)
  },
  {
    id : Math.random().toString(),
    title: "Movie",
    price: 5,
    date: new Date(2022,8, 23)
  },
];
function App() {
  const [updatedExpenses, setUpdatedExpenses] = useState(expenses);
  const latestExpenseHandler = (newExpenseObject) => {
    setUpdatedExpenses(
      (prevState) => {
        return ([...prevState, newExpenseObject]);
      }
    );
  };
  return (
    <div className='backGround'>
      <div id="backdrop"></div>
      <NewExpense onlatestExpense={latestExpenseHandler} />
      <Expenses expenses={updatedExpenses} />
    </div>
  );
}

export default App;
