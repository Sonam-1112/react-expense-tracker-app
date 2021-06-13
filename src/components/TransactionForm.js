import React,{useState} from 'react'
import { uniqueId } from '../utils';

const TransactionForm = ({onNewTransaction}) => {
    const [nameValue, setNameValue] = useState('');
    const [amountValue,setAmountValue] = useState('');

    const addTransaction = (e,type) =>{
        e.preventDefault();
        if(nameValue.trim()!=='' && amountValue!==''){
        const data =  { id:uniqueId(), name:nameValue, amount:parseInt(amountValue), type:type};
        setNameValue('');
        setAmountValue('');
        onNewTransaction(data);
        }
        else{
            alert("Both fields are required!!!")
        }
    }

    return (
        <div className="form">
            <h3 className="sub-heading">Add New Transactions</h3>
            <form action="">
                <label htmlFor="name">Name</label>
                <div className="">
                    <input type="text" value={nameValue} onChange={(e)=>
                        {setNameValue(e.target.value)}} placeholder="Enter transaction name..."/>
                </div>
                <label htmlFor="amount">Amount</label>
                <div className="">
                    <input type="number"  value={amountValue} onChange={(e)=>
                        {setAmountValue(e.target.value)}} placeholder="Enter transaction amount..."/>
                </div>
                <button className="incomebtn" onClick={(e)=>addTransaction(e,'income')}>Add Income</button>
                <button className="expensebtn"  onClick={(e)=>addTransaction(e,'expense')}>Add Expense</button>
            </form>
        </div>
    )
}

export default TransactionForm
