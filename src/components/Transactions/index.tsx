import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
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
                    <tr>
                        <td>Densenvolvimento de website</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                - R$ 59,00
                            </PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
    )
}