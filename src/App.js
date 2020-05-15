import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import "./App.css";
import Toggle from "./components/Toggle/Toggle";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a light theme!</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
