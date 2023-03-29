import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
const Products = () => {
  return (
    <section className="section-bg">
      <div className="container">
        <div className="container__row">
          <div className="container__col-xl-2 container__col-lg-3 container__col-md-4">
            <Sidebar />
          </div>
          <div className="container__col-xl-9 container__col-lg-9 container__col-md-8">
            <ProductList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
