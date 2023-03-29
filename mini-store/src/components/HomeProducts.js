import Button from "./Button";
//import ProductsTab from "./ProductsTab";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import SingleProduct from "./SingleProduct";
import { productsContext } from "../store/ProductContext";
const HomeProducts = () => {
  const { products } = useContext(productsContext);
  console.log("single", products);
  return (
    <section className="section-bg">
      <div className="container">
        <SectionTitle />
        {/* <ProductsTab /> */}
        <div className="container__row">
          {products.map((product) => {
            return <SingleProduct {...product} />;
          })}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <Button name="View All" />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
