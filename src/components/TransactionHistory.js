import React from 'react'

const TransactionHistory = ({transactions,onDeleteTransaction}) => {
    
    return (
        <div className="transactionHistory">
            <h3 className="sub-heading">Transaction history</h3>
            <ul>
                {
                    transactions.map((transaction)=>
                        <li key={transaction.id}>{transaction.name} ${transaction.amount} <button onClick={()=>onDeleteTransaction(transaction.id)}>x</button> </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory
