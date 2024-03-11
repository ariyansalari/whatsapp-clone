import React from "react";
import { Provider } from "react-redux";
import { store } from "./system/store";
import { AppProvider } from "provider/provider";

function App() {
  return (
    <div className="dark">
      <Provider store={store}>
        <AppProvider />
      </Provider>
    </div>
  );
}

export default App;
