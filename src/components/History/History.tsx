import React, { useContext } from 'react'
import { Store } from '../../context/Context'
import styles from './History.module.css'

export const History: React.FC = () => {

    const [ value, setValue ] = useContext(Store)

    return (
        <div className={styles.container}>
            <h5>History</h5>
            <hr />
            {
                value.map((item:any) => (
                    <>
                    <h1>{item.text}</h1>
                    <h1>{item.amount}</h1>
                    <button onClick={() => setValue(value.filter((e:any) => e.id !== item.id))}>delete</button>
                    </>
                ))
            }
        </div>
    )

}
