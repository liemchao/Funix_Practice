import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const checkInput = (value) => {
        return value === '' ? false : true;
    }

    const splitText = (text, splitCharacter) => {
        return text.split(splitCharacter);
    }

    const convertExpenseObj = (e) => {
        e.preventDefault();
        let isValid = checkInput(enteredTitle) && checkInput(enteredAmount) && checkInput(enteredDate);
        if (isValid) {
            const splitDate = splitText(enteredDate, '-')
            const objExpense = {
                id: `e${props.expenseItems.length + 1}`,
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(splitDate[0], splitDate[1], splitDate[2]),
            }
            props.addExpenseItem(objExpense)
            console.log("ada")
            setEnteredTitle('')
            setEnteredAmount('')
            setEnteredDate('')
        } else {
            alert('Enter all field');
        }
    }

    const setDisplayForm = (e) => {
        e.preventDefault();
        props.setDisplayForm(false);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onInput={(e) => {
                        setEnteredTitle(e.target.value);
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' step='0.01' min='0.01' value={enteredAmount} onInput={(e) => {
                        setEnteredAmount(e.target.value);
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='date' value={enteredDate} onInput={(e) => {
                        setEnteredDate(e.target.value);
                    }} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit' className='cancel' onClick={setDisplayForm}>Cancel</button>
                    <button type='submit' onClick={convertExpenseObj}>Add Expense</button>
                </div>
            </div>

        </form>
    );
}

export default ExpenseForm;