import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/main-page/MainPage.jsx";
import BasketPage from "../../pages/basket/BasketPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
}
