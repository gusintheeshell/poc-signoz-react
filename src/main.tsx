import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProvider } from "@/context";
import { rickAndMorty } from "@/themes";
import App from "./App.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={rickAndMorty}>
        <AppProvider>
          <App />
        </AppProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
