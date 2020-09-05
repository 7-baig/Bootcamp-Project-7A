import React from 'react';
import styles from './App.module.css'
import StoreProvider from './context/Context'
import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {

  return (
    <StoreProvider>
      <div className={styles.app}>
        <Header />
        <History />
        <AddTransaction />
        <Footer />
        <p className={styles.credit}>
          <a target="_blank" href="https://icons8.com/icons/set/transaction-list--v7">
            Transaction List icon
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </p>
      </div>
    </StoreProvider>
  );
}

export default App;
