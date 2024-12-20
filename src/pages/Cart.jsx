import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
} from "../redux/slices/cartSlice";

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

  return (
    <>
      <Navbar />
      <section className="cart">
      <h1>Cart</h1>
      <p>Total Cost: € {totalPrice}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
          <div>
            {cartItems.map((item) => (
          <div key={item.product.id} className="cart-item">
            <img
              src={item.product.src}
              alt={item.product.alt}
              className="cart-item__image"
            ></img>
                <h2>{item.product.name}</h2>
            <p>Price: € {item.product.price}</p>
            <div className="cart-item__quantity">
              <button
                onClick={() =>
                  handleQuantityChange(item.product.id, item.quantity - 1)
                }
                type="button"
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() =>
                  handleQuantityChange(item.product.id, item.quantity + 1)
                }
                type="button"
              >
                +
              </button>
            </div>
            <p>
              Total Cost: € {(item.product.price * item.quantity).toFixed(2)}
            </p>
                <button
                  onClick={() => handleRemoveItem(item.product.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
      )}
        <button type="button">Checkout</button>
        <button onClick={productPageRedirect} type="button">
          Continue Shopping
        </button>
      </section>
    </>
  );
}

export default Cart;
