import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
} from "../redux/slices/cartSlice";
import "../scss/pages/cart.scss";
import "../scss/components/cart-item.scss";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));

    if (newQuantity <= 0) {
      dispatch(removeFromCart({ id }));
    }
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const productPageRedirect = () => {
    navigate("/products");
  };

  const checkoutAlert = () => {
    alert("Check out coming soon!");
  };

  return (
    <>
      <Navbar />
      <section className="cart">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <p>Total Cost: € {totalPrice}</p>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.product.id} className="cart-items__product">
                  <img
                    src={item.product.src}
                    alt={item.product.alt}
                    className="cart-items__product-image"
                  ></img>
                  <div className="cart-items__product-details">
                    <h2 className="cart-items__product-name">
                      {item.product.name}
                    </h2>
                    <p className="cart-items__product-price">
                      Price: € {item.product.price}
                    </p>
                    <div className="cart-items__product-quantitycontrol">
                      <button
                        className="cart-items__product-removeButton"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        type="button"
                      >
                        -
                      </button>
                      <p className="cart-items__product-quantity">
                        {item.quantity}
                      </p>
                      <button
                        className="cart-items__product-addButton"
                        onClick={() =>
                          handleQuantityChange(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <p className="cart-items__product-totalCost">
                      Total Cost: €{" "}
                      {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="cart-items__product-deleteButton"
                      onClick={() => handleRemoveItem(item.product.id)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="cart__buttons">
          {cartItems.length !== 0 && (
            <button onClick={checkoutAlert} type="button">
              Checkout
            </button>
          )}
          <button onClick={productPageRedirect} type="button">
            Continue Shopping
          </button>
        </div>
      </section>
    </>
  );
}

export default Cart;
