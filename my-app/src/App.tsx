import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductManager from './components/ProductManager';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Trang Chủ</Link></li>
              <li><Link to="/products">Quản lý Sản Phẩm</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<div>Trang Chủ</div>} />
            <Route path="/products" element={<ProductManager />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
