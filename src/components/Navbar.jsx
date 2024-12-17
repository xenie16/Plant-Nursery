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
        <h1 className="navbar__brand-name">Green Whispers</h1>
      </div>
      <img
        className="navbar__cart-icon"
        onClick={cartRedirect}
        src="/cart-icon.svg"
        alt=""
      ></img>
    </nav>
  );
}

export default Navbar;
