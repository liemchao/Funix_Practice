
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
    const [expenses] = useState(props.expenseItems);
    const [expensesFilter, setExpensesFilter] = useState(expenses);

    const filterExpense = (year) => {
        if (year === 'none') {
            setExpensesFilter(expenses)
        }
        else {
            setExpensesFilter(() => {
                return expenses.filter((expense) => {
                    return expense.date.getFullYear().toString() === year;
                })
            })
        }
    }

    const renderExpense = () => {
        if (expensesFilter.length === 0) {
            return <p className='light-text'>No expense found</p>
        }
        return expensesFilter.map((expense) => {
            return <ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
    }

    const onchangeFilterYear = (year) => {
        filterExpense(year)
    }
    return (
        <div className="expenses">
            <ExpensesFilter onchangeFilterYear={onchangeFilterYear} />
            {renderExpense()}
        </div>
    );
}

export default Expense;