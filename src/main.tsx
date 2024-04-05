import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.tsx";
import { rickAndMorty } from "@/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={rickAndMorty}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
