import { useContext } from "react";
import { productsContext } from "../store/ProductContext";
import { Link } from "react-router-dom";

const Category = () => {
  const { categories } = useContext(productsContext);
  return categories.map((category) => {
    const { image, name, id } = category;

    return (
      <div className="container__col-md-3">
        <div className="category" key={id}>
          <img src={image} className="img-100" alt={name} />
          <div className="category__description">
            <h3>{name}</h3>
            <Link to={`productdetail/${id}`}>View all</Link>
          </div>
        </div>
      </div>
    );
  });
};

export default Category;
