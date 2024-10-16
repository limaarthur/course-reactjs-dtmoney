import { useContext } from "react"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext"

import { SummaryContainer, SummaryCard } from "./styles"

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </SummaryCard>
            <SummaryCard className="highlight-background">
                <header>
                    <span>Total</span>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}