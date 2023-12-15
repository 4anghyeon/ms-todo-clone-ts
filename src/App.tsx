import React from "react";
import MainContainer from "./components/Main/MainContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./styles/GlobalStyles.styled";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainContainer />
    </Provider>
  );
}

export default App;
