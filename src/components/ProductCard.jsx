import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ plant }) {
  const [buttonText, setUseButtonText] = useState("Add to Cart");
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (isDisabled === false) {
      dispatch(addToCart(plant));
      setUseButtonText("Added to Cart");
      setIsDisabled(true);
    }
  };

  return (
    <article className="product-card">
      <img
        loading="lazy"
        className="product-card__image"
        src={plant.src}
        alt={plant.alt}
      ></img>
      <h2 className="product-card__name">{plant.name}</h2>
      <p className="product-card__price">€ {plant.price}</p>
      <button
        type="button"
        onClick={handleAddToCart}
        className="product-card__button"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default ProductCard;
