import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
