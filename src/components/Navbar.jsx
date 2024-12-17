import { useNavigate } from "react-router-dom";
import "../scss/components/Navbar.scss";

function Navbar() {
  const navigate = useNavigate();

  const landingPageRedirect = () => {
    navigate("/");
  };

  const cartRedirect = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <div onClick={landingPageRedirect} className="navbar__brand">
        <img className="navbar__brand-logo" src="/logo.png"></img>
        <div>
          <h1 className="navbar__brand-name">Green Whispers</h1>
          <p className="navbar__brand-subtitle">
            Where Every Leaf Tells a Story
          </p>
        </div>
      </div>
      <a className="navbar__links" href="./products">
        Plants
      </a>
      <img
        className="navbar__cart"
        onClick={cartRedirect}
        src="/cart-icon.svg"
        alt=""
      ></img>
    </nav>
  );
}

export default Navbar;
