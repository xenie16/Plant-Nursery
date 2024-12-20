import { useNavigate } from "react-router-dom";
import "../scss/components/Navbar.scss";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/slices/cartSlice";

function Navbar() {
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();

  const landingPageRedirect = () => {
    navigate("/");
  };

  const cartRedirect = () => {
    navigate("/cart");
  };

  const productPageRedirect = () => {
    navigate("/products");
  };

  return (
    <nav className="navbar">
      <div onClick={landingPageRedirect} className="navbar__brand">
        <img className="navbar__brand-logo" src="/logo.png"></img>
        <div>
          <h1>Green Whispers</h1>
          <p>Where Every Leaf Tells a Story</p>
        </div>
      </div>
      <a onClick={productPageRedirect} className="navbar__links">
        Plants
      </a>
      <div className="navbar__cart">
        <img
          className="navbar__cart-icon"
          onClick={cartRedirect}
          src="/cart-icon.svg"
          alt=""
        ></img>
        <span className="navbar__cart-total">{totalItems}</span>
      </div>
    </nav>
  );
}

export default Navbar;
