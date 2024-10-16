import { useContext } from "react";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export function Transactions() {
    const transactions = useContext(TransactionsContext);

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