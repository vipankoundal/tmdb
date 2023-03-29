import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Logo />
        <Search />
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
          <li>
            <Link to="/Signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
