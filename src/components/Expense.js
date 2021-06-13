import React from 'react'

const Expense = ({income,expense}) => {
    return (
        <div>
            <div>
                <h3 className="sub-heading">Your Balance</h3>
                <div className="balance">${income - expense}</div>
            </div>
            <div className="income-expense">
                <div className="incomeField">
                    <h4>Income</h4>
                    <div className="amount">${income}</div>
                </div>
                <div className="expenseField">
                    <h4>Expense</h4>
                    <div className="amount">${expense}</div>
                </div>
            </div>
        </div>
    )
}

export default Expense
