import React,{useState,useEffect} from 'react'
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';

// Aggregator Component
const ExpenseTracker = () => {
    const transactionData = [
        
    ];

    const [income,setIncome] = useState(0);
    const [expense,setExpense]  = useState(0);
    const [transactions,setTransactions] = useState(transactionData);

    const saveState = () =>{
        localStorage.setItem('expenseTrackerState',JSON.stringify(transactions));
    }


    const calExpenses = () => {
        let income=0, expense = 0;
        transactions.forEach((data)=>{
            if(data.type === 'income'){
                income += data.amount;
            }
            else if(data.type === 'expense'){
                expense += data.amount; 
            }
        })
        saveState();
        setIncome(income);
        setExpense(expense);
    }

    const handleAddNewTransaction = (transaction) =>{
        setTransactions([...transactions,transaction]);
    }

    const handleDeleteTransaction = (id) =>{
        console.log(id);
        setTransactions(transactions.filter((data)=> data.id !== id));
    }

    useEffect(()=>{
        let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));
        if(localState){
            setTransactions(localState);
        }
        else{
            calExpenses();
        }
    },[])

    useEffect(()=>{
        calExpenses();
    },[transactions])

    return (
        <div>
            <h1>Expense Tracker</h1>
            <Expense income={income} expense={expense}/>
            <TransactionHistory transactions={transactions} onDeleteTransaction= {handleDeleteTransaction}/>
            <TransactionForm onNewTransaction = {handleAddNewTransaction}/>
        </div>
    )
}

export default ExpenseTracker
