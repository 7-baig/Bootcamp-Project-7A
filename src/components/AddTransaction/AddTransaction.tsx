import React, { useState, useContext } from 'react'
import { Store } from '../../context/Context'
import styles from './AddTransaction.module.css'

export const AddTransaction: React.FC = () => {

    const [textValue, setTextValue] = useState<string>('')
    const [amountValue, setAmountValue] = useState<number>()

    const [value, setValue] = useContext<any>(Store)

    const handleClick = () => {
        let item = {
            id: Math.floor(Math.random() * 100000000),
            text: textValue,
            amount: amountValue,
        }
        setValue([...value, item])
        setTextValue('')
        setAmountValue(0)
    }

    return (
        <div className={styles.container}>
            <h4>Add New Transaction</h4>
            <hr />
            <div className={styles.form}>
                <h4>Text</h4>
                <input 
                    type="text" 
                    name="textValue" 
                    value={textValue} 
                    placeholder="Headphones"
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setTextValue(ev.target.value)} 
                />
                <h4>Amount<span>(-expense, +income)</span></h4>
                <input
                    type="number" 
                    name="amountValue" 
                    value={amountValue} 
                    placeholder="$15"
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setAmountValue(parseInt(ev.target.value, 10))}
                />
                <button
                    onClick={handleClick}
                >
                    Add transaction
                </button>
            </div>
        </div>
    )

}
