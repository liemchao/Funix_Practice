import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'
function NewExpense(props) {
    const [isDisplayForm, setIsDisplayForm] = useState(false);

    const checkRenderForm = () => {
        return isDisplayForm
            ? <ExpenseForm
                setDisplayForm={setIsDisplayForm}
                expenseItems={props.expenseItems}
                addExpenseItem={props.addExpenseItem}
            />
            : <button onClick={() => {
                setIsDisplayForm(true);
            }}>Add New Expense</button>
    }

    return (
        <div className="new-expense">
            {checkRenderForm()}
        </div>
    );
}

export default NewExpense;