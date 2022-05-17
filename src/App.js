import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <div>
        <p>Jide</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
