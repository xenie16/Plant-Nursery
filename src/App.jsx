import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import ProductPage from "./pages/ProductPage";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
