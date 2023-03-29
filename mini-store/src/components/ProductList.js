import React from "react";
import SingleProduct from "../components/SingleProduct";
import { useFilterContext } from "../store/FilterContext";

const ProductList = () => {
  const { fiter_products } = useFilterContext();

  return (
    <div className="container__row">
      {fiter_products.map((product, i) => {
        return <SingleProduct {...product} key={i} />;
      })}
    </div>
  );
};

export default ProductList;
