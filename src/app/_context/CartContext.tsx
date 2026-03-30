"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  quantities: Record<string, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  updateQuantity: (productId: string, qty: number) => void;
  totalUniqueItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (productId: string, qty: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, qty)
    }));
  };

  const totalUniqueItems = Object.values(quantities).filter(qty => qty > 0).length;

  return (
    <CartContext.Provider value={{ quantities, setQuantities, updateQuantity, totalUniqueItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
