import { useState } from "react";

function ProductCard({ plant }) {
  const [buttonText, setUseButtonText] = useState("Add to Cart");
  const [isDisabled, setIsDisabled] = useState(false);

  const addToCart = () => {
    if (buttonText === "Add to Cart") {
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
      <button
        type="button"
        onClick={addToCart}
        className="product-card__button"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default ProductCard;
