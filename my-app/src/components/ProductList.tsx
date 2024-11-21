import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  // Giả lập việc lấy dữ liệu sản phẩm từ API
  useEffect(() => {
    setProducts([
      { id: 1, name: 'Sản phẩm 1', price: '100.000 VND' },
      { id: 2, name: 'Sản phẩm 2', price: '200.000 VND' },
      { id: 3, name: 'Sản phẩm 3', price: '300.000 VND' },
    ]);
  }, []);

  return (
    <div>
      <h2>Danh Sách Sản Phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Quay lại Trang Chủ</Link>
    </div>
  );
};

export default ProductList;
