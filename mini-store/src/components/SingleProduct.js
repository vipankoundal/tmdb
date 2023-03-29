import { Link } from "react-router-dom";
import Button from "./Button";
import Prize from "./Prize";
import Star from "./Star";

const SingleProduct = (props) => {
  const { title, price, thumbnail, id, rating } = props;
  return (
    <div
      className="container__col-xl-3 container__col-lg-4  container__col-md-4 container__col-sm-6 container__col-12"
      key={id}
    >
      <div className="single-product" key={id}>
        <Link to={`/productdetail/${id}`}>
          <img src={thumbnail} className="img-100" alt={title} />
        </Link>
        <div className="single-product__short">
          <h4>{title}</h4>
          <p>
            <Star rating={rating} />
            {rating}
          </p>
          <div className="more">
            <Link to="/">
              <Button name="Add to Cart" />
            </Link>
            <div className="more__price">
              <Prize price={price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
