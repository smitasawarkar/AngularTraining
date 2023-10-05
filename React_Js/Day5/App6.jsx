import React from "react";
import ReactDOM from "react-dom";
import { MyComponent, MyContextProvider } from "./demo.js";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <MyComponent />
      </div>
    </MyContextProvider>
  );
}

export default App