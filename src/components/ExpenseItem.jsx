import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const[title, setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle('Changed');
    console.log('ok');

  }


  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={clickHandler}>click me</button>
    </Card>
  );
}

export default ExpenseItem;
