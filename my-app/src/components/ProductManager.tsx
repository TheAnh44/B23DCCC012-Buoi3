import React, { useState } from 'react';
import Modal from 'react-modal';
import ProductForm from './ProductForm'; // Import form
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/productSlice'; // Import action addProduct
import { RootState } from '../redux/store'; // Import RootState nếu cần
import './components.css';

Modal.setAppElement('#root');

const ProductManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Lấy danh sách sản phẩm từ Redux store
  const products = useSelector((state: RootState) => state.products.items);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddProduct = (newProduct: { name: string; price: number; quantity: number }) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1; // Tạo id mới
    dispatch(addProduct({ ...newProduct, id: newId })); // Dispatch action thêm sản phẩm
    closeModal(); // Đóng modal sau khi thêm sản phẩm
  };

  return (
    <div className="product-manager">
      <h2>Quản Lý Sản Phẩm</h2>
      <button onClick={openModal}>Thêm Sản Phẩm</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Thêm Sản Phẩm"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Thêm Sản Phẩm Mới</h2>
        <ProductForm onSubmit={handleAddProduct} onClose={closeModal} /> {/* Truyền handleAddProduct vào */}
      </Modal>
    </div>
  );
};

export default ProductManager;
