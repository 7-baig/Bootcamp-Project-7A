import React, { useContext, useState } from 'react'
import { Store } from '../../context/Context'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

export const Header: React.FC = () => {

    const [value, setValue] = useContext<any>(Store)

    const amounts = value.map((item: any) => item.amount)
    const total = amounts.reduce((acc: any, item: any) => (acc += item), 0).toFixed(2)

    // income
    const income = amounts
        .filter((item: any) => item > 0)
        .reduce((acc: any, item: any) => (acc += item), 0)
        .toFixed(2);

    // expense
    const expense = amounts
        .filter((item: any) => item < 0)
        .reduce((acc: any, item: any) => (acc += item), 0)
        .toFixed(2);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={logo} alt="logo" />
                <h1>Expense Tracker PWA</h1>
            </div>
            <hr />
            <h2 className={styles.balance}>Your Balance</h2>
            <h1
                className={styles.totalAmount}
                style={total < 0 
                ? 
                { color: 'var(--expense-text-color)' } 
                : 
                { color: 'var(--income-text-color)' }}
            >${total}</h1>
            <div className={styles.cardsContainer}>
                <div className={styles.incomeCard}>
                    <h4>INCOME</h4>
                    <h4>${income}</h4>
                </div>
                <div className={styles.expenseCard}>
                    <h4>EXPENSE</h4>
                    <h4>${expense}</h4>
                </div>
            </div>
        </div>  
    )
}
