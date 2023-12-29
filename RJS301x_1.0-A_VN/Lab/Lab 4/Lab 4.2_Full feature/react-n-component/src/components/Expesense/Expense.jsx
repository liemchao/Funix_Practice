
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
    const [expenses, setExpenses] = useState(props.expenseItems);
    const [expensesFilter, setExpensesFilter] = useState(expenses);
    const [filterYear, setFilterYear] = useState('none');

    const checkChangeValueExpenses = () => {
        if (props.expenseItems.length !== expenses.length) {
            setExpenses(props.expenseItems);
            filterExpense(filterYear)
        }

    }
    const filterExpense = (year) => {
        if (year === 'none') {
            setExpensesFilter(props.expenseItems)
        }
        else {
            setExpensesFilter(() => {
                return props.expenseItems.filter((expense) => {
                    return expense.date.getFullYear().toString() === year;
                })
            })
        }
    }

    const renderExpense = () => {
        if (expensesFilter.length === 0) {
            return <h2 className='light-text text-center'>No expense found</h2>
        }
        return expensesFilter.map((expense) => {
            return <ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        })
    }

    const onchangeFilterYear = (year) => {
        setFilterYear(year)
        filterExpense(year)
    }
    checkChangeValueExpenses();
    return (
        <div className="expenses">
            <ExpensesFilter onchangeFilterYear={onchangeFilterYear} />
            {renderExpense()}
        </div>
    );
}

export default Expense;