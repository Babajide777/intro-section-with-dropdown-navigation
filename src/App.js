import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";
import up from "./assets/images/icon-arrow-up.svg";
import Nav from "./components/Nav";
import MainBox from "./components/MainBox";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
      <MainBox></MainBox>

      <img src={up} alt="" />
    </ThemeProvider>
  );
}

export default App;
