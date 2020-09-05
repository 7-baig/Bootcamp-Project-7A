import React, { useContext } from 'react'
import { Store } from '../../context/Context'
import styles from './History.module.css'

export const History: React.FC = () => {

    const [ value, setValue ] = useContext(Store)

    return (
        <div className={styles.container}>
            <h4>History</h4>
            <hr />
            {
                value.length !== 0 
                ?
                value.map((item:any) => (
                    <div 
                        key={item.id} 
                        className={styles.item}
                        style={ item.amount < 0 ? { backgroundColor: 'rgb(255, 199, 199)' } : { backgroundColor: 'rgb(199, 255, 199)' } }
                    >
                        <h4 className={styles.text}>{item.text}</h4>
                        <h4 className={styles.amount}>${item.amount}</h4>
                        <button 
                            onClick={() => setValue(value.filter((e:any) => e.id !== item.id))}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                ))
                :
                <p>No items</p>
            }
        </div>
    )
}
