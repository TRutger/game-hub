// React
import React from "react";
import ReactDOM from "react-dom/client";
// 3-Party Libraries
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// Own import statements
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
