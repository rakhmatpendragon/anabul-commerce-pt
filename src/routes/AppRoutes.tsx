import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShopAll from '../pages/ShopAll';
import AvailableCats from '../pages/AvailableCats';
import LiveAuctions from '../pages/LiveAuctions';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="/cats" element={<AvailableCats />} />
      <Route path="/cats/:id" element={<ProductDetail />} />
      <Route path="/auctions" element={<LiveAuctions />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
