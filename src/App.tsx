import React from "react";
import "./App.css";
import { Example2 } from "./mockingExamples/example2/Example2";

function App() {
  return (
    <Example2
      onMoney={(n) => {
        console.log(n);
      }}
    />
  );
}

export default App;
