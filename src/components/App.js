import React from "react";
import Form from "./Form";

function App() {
  return [
    <header className="aws-header">
      <h1>
        powered by <span className="aws">aws</span>
      </h1>
    </header>,
    <div className="container">
      <Form />
    </div>,
  ];
}

export default App;
