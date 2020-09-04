import React from 'react';
import styles from './App.module.css'
import StoreProvider from './context/Context'
import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { AddTransaction } from './components/AddTransaction/AddTransaction';

const App: React.FC = () => {

  return (
    <StoreProvider>
      <div className={styles.app}>
        <Header />
        <History />
        <AddTransaction />
      </div>
    </StoreProvider>
  );
}

export default App;
