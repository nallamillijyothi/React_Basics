import React from "react";
import  ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <div>
        header
      </div>
      <div>
        body
      </div>
      <div>
        footer
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)