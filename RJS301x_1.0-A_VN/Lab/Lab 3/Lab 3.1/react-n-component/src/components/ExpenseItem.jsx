import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const updateTitle = () => {
        setTitle('Updated!');
    }
    return (
        <div id={props.id} className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={updateTitle}>Change title</button>
        </div>
    );
}

export default ExpenseItem;