import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import HomePage from './routes/homePage/HomePage';
import ProductsAll from './routes/productsAll/ProductsAll';

import Layout from './routes/Layout/Layout';
import './App.scss';
import ProductPage from './routes/productPage/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsAll />} />
          <Route path="products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
