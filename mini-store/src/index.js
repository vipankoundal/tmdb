import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ProductsProvider } from "./store/ProductContext";
import { FilterContextProvider } from "./store/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ProductsProvider>
);
