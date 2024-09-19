import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Transactions } from "./components/Transactions";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Summary />
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}
