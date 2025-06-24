import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const quantity = newItem.quantity || 1;
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === newItem.id && 
        item.size === newItem.size && 
        item.color === newItem.color
      );

      if (existingItem) {
        toast.success('Quantity updated in cart');
        return prevItems.map(item =>
          item.id === newItem.id && 
          item.size === newItem.size && 
          item.color === newItem.color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success('Item added to cart');
        return [...prevItems, { ...newItem, quantity }];
      }
    });
  };

  const removeItem = (id, size, color) => {
    setItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === id && item.size === size && item.color === color)
      )
    );
    toast.success('Item removed from cart');
  };

  const updateQuantity = (id, quantity, size, color) => {
    if (quantity <= 0) {
      removeItem(id, size, color);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Cart cleared');
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};