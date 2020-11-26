import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import Menu from "../components/Menu";

const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
