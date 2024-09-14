import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Header } from "./components/Header";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}
