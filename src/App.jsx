import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
