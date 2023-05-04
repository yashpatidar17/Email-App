import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EmailContextProvider,EmailContext } from "./Context/EmailContextProvider.jsx";

export {EmailContext}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <EmailContextProvider>
    <App />
    </EmailContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
