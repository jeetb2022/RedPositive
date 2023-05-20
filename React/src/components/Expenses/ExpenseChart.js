
import Chart from "../Chart/Chart";


let ExpenseChart = (props)=>{
    const dataPoints = [
        {key:Math.random().toString(),label:'jan', value : 0},
        {key:Math.random().toString(),label:'feb', value : 0},
        {key:Math.random().toString(),label:'mar', value : 0},
        {key:Math.random().toString(),label:'apr', value : 0},
        {key:Math.random().toString(),label:'may', value : 0},
        {key:Math.random().toString(),label:'jun', value : 0},
        {key:Math.random().toString(),label:'july', value : 0},
        {key:Math.random().toString(),label:'aug', value : 0},
        {key:Math.random().toString(),label:'sep', value : 0},
        {key:Math.random().toString(),label:'oct', value : 0},
        {key:Math.random().toString(),label:'nov', value : 0},
        {key:Math.random().toString(),label:'dec', value : 0},   
    ];
    const expensePrice = props.expenses.map((expense)=>{
        return expense.price;
    });
    const maxValue = Math.max(...expensePrice);
    props.expenses.forEach(element => {
        const expenseMonth =element.date.getMonth();
        dataPoints[expenseMonth].value =parseInt(dataPoints[expenseMonth].value)+parseInt(element.price);
    });
  

  return (
    <Chart dataPoints={dataPoints} maxValue={maxValue}></Chart>
  )
};

export default ExpenseChart;