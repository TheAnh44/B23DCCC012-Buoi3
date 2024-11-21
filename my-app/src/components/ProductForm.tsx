import React, { useState } from 'react';

interface ProductFormProps {
  onSubmit: (product: { name: string; price: number; quantity: number }) => void;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number | ''>('');
  const [quantity, setQuantity] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price && quantity) {
      onSubmit({ name, price: Number(price), quantity: Number(quantity) });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sản phẩm:</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Giá:</label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value ? Number(e.target.value) : '')}
          required
        />
      </div>
      <div>
        <label>Số lượng:</label>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value ? Number(e.target.value) : '')}
          required
        />
      </div>
      <button type="submit">Thêm</button>
      <button type="button" onClick={onClose}>Hủy</button>
    </form>
  );
};

export default ProductForm;
