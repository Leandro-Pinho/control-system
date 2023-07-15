import React, { useState } from 'react'
import './styleForm.css'
import Grid from '../grid/Grid';

const Form = ({ handleAdd, transactionslist, setTransactionsList }) => {
    const [desc, setDesc] = useState("");;
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false)

    // criar um id
    const generateId = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!")
            return;
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return (
        <>
            <div className='containerForm'>
                <div className='inputContent'>
                    <label>Descrição</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className='inputContent'>
                    <label>Valor</label>
                    <input
                        value={amount}
                        type='number'
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className='RadioGroup'>
                    <input type='radio' id='rIncome' defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
                    <label htmlFor='rIncome'>Entrada</label>
                    <input type='radio' id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)} />
                    <label htmlFor='rExpenses'>Saida</label>
                </div>
                <button onClick={handleSave}>Adicionar</button>
            </div>
            <Grid itens={transactionslist} setItens={setTransactionsList} />
        </>
    )
}

export default Form
