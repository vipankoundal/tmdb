import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { productsContext, APIProducts } from "../store/ProductContext";
import Prize from "../components/Prize";
import Star from "../components/Star";

const ProductDetail = () => {
  const { id } = useParams();

  const { getProductdetail, productdetail } = useContext(productsContext);

  useEffect(() => {
    getProductdetail(`${APIProducts}/${id}`);
  }, []);
  // eslint-disable-next-line
  const { title, description, price, rating, stock, brand, thumbnail } =
    productdetail;
  return (
    <>
      <div className="container product-details">
        <div className="container__row ">
          <div className="container__col-md-6">
            <div className="product-details-left">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div className="container__col-md-6">
            <div className="product-details-right">
              <h2>{title}</h2>
              <p>{description}</p>

              <ul>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Brand: <span>{brand}</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
              <div className="price">
                <span>
                  <Prize price={price} />
                </span>
                <span>
                  <Star rating={rating} />
                  {rating}
                </span>
                <span>stock {stock}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
