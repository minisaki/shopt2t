import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/home-page/home-page.component";
import Home from "./components/pages/home/home.component";
import Shop from "./routes/shop/shop.component";
import BlogPage from "./routes/blog-page/blog-page.component";
import CheckOut from "./components/pages/checkout/checkout.component";
import CartDetail from "./components/pages/cart-detail/cart-detail.component";

import './sass/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} >
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="blog/*" element={<BlogPage />}/>
        <Route path="checkout" element={<CheckOut />}/>
        <Route path="shopping-cart" element={<CartDetail />}/>
      </Route>
    </Routes>
  );
}

export default App;
