import React from "react";
import MainContainer from "./components/Main/MainContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./styles/GlobalStyles.styled";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainContainer />
      <ToastContainer />
    </Provider>
  );
}

export default App;
