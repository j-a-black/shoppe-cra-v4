import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";

import { CartProvider } from "./context/cart.context";

import "./index.scss";

const root = document.querySelector("#root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <CartProvider>
          <App />
        </CartProvider>
      </ScrollToTop>
    </BrowserRouter>
  </StrictMode>,
  root
);
