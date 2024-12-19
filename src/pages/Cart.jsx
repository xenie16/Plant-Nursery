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

  const totalPrice = cartItems
    .reduce((total, item) => total + item.product.price * item.quantity, 0)
    .toFixed(2);

  const handleQuantityChange = (id, newQuantity) => {
      dispatch(updateQuantity({ id, quantity: newQuantity }));

    if (newQuantity <= 0) {
      dispatch(removeFromCart({ id }));
    }
  };
  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <p>Total Cost: € {totalPrice}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.src}
              alt={item.alt}
              className="cart-item__image"
            ></img>
            <h2>{item.name}</h2>
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
          </div>
        ))
      )}
    </>
  );
}

export default Cart;
