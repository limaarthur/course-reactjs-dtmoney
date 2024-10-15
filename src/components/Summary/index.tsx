import { useContext } from "react"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext"

import { SummaryContainer, SummaryCard } from "./styles"

export function Summary() {
    const data = useContext(TransactionsContext);

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>R$ 1.400,00</strong>
            </SummaryCard>
            <SummaryCard className="highlight-background">
                <header>
                    <span>Total</span>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 16.000,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}