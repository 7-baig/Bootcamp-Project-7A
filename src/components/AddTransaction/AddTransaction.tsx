import React, { useState, useContext } from 'react'
import { Store } from '../../context/Context'
import styles from './AddTransaction.module.css'

export const AddTransaction: React.FC = () => {

    const [textValue, setTextValue] = useState<string>('Headphones')
    const [amountValue, setAmountValue] = useState<number>(30)

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
            <h5>Add New Transaction</h5>
            <hr />
            <div className={styles.form}>
                <h6>Text</h6>
                <input 
                    type="text" 
                    name="textValue" 
                    value={textValue} 
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>,): void => setTextValue(ev.target.value)} 
                />
                <h6>Amount</h6>
                <input
                    type="number" 
                    name="amountValue" 
                    value={amountValue} 
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
