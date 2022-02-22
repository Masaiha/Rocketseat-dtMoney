import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
      id: number,
      title: string,
      amount: number,
      type: string,
      category: string,
      createAt: string
}

//Abaixo duas formas de criar um objeto com base em outro
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;
type TransactionInput2 = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>; 

interface TransactionsProviderChildrenProps {
      children: ReactNode;
} 

interface TransactionsContextData {
      transactions: Transaction[],
       createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderChildrenProps){
      const [transactions, setTransactions] = useState<Transaction[]>([]);

      useEffect(() => {
            api.get('transactions')
                  .then(response => setTransactions(response.data.transactions))
      }, []);

      async function createTransaction(transactionInput : TransactionInput){
           const response = await api.post('/transactions', {
                 ...transactionInput,
                 createAt: new Date()
           });
           const { transaction } = response.data;
           setTransactions([...transactions, transaction]);
      }

      return (
            <TransactionsContext.Provider value={{ transactions, createTransaction }}>
                  {children}
            </TransactionsContext.Provider>
      )
}