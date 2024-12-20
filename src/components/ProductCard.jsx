import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../redux/slices/cartSlice";

function ProductCard({ plant }) {
  const cartItems = useSelector(selectCartItems);
  const isItemInCart = cartItems.some((item) => item.product.id === plant.id);
  const addedToCartText = "Added to Cart";

  const [buttonText, setUseButtonText] = useState(
    isItemInCart ? addedToCartText : "Add to Cart"
  );
  const [isDisabled, setIsDisabled] = useState(isItemInCart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!isDisabled) {
      dispatch(addToCart(plant));
      setUseButtonText(addedToCartText);
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
