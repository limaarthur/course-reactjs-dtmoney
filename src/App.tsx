import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Summary />
      <GlobalStyle />
    </ThemeProvider>
  )
}
