import GlobalStyle from "@/styles/global";
import { lightTheme } from "@/styles/theme";
import { Global, ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Global styles={GlobalStyle} />
    </ThemeProvider>
  );
};

export default App;
