import React from "react";
import MainContainer from "./components/Main/MainContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./styles/GlobalStyles.styled";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <MainContainer />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
