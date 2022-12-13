import { Route, Routes } from 'react-router-dom';
import ProductDetail from '../../components/pages/product-detail/product-detail.component';
import Products from '../../components/pages/products/products.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Products/>} />
      <Route path=":productId" element={<ProductDetail/>} />
    </Routes> 
  )
}

export default Shop;