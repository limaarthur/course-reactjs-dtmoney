import { useEffect, useState } from "react";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContainer>
            <TransactionsTable>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                   {transactions.map(transaction => {
                    return(
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td>
                                <PriceHighlight variant="income">
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}