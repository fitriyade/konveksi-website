"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '../_context/CartContext';

interface Product {
  id: string;
  name: string;
  category: string;
  minOrder: number;
  pricePerOrder: number;
  image: string;
  description: string;
}

export default function ProductPortfolio({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { quantities, updateQuantity } = useCart();
  const router = useRouter();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Belum ada produk untuk ditampilkan.
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-amber-400 text-sm font-medium mb-2 block">{product.category}</span>
              <h3 className="text-white text-xl font-bold mb-4">{product.name}</h3>
              <button 
                onClick={() => setSelectedProduct(product)}
                className="px-6 py-2.5 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors w-full"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md transition-colors"
            >
              ✕
            </button>
            
            {/* Image side */}
            <div className="relative h-64 md:h-auto md:w-1/2 bg-gray-100 shrink-0">
              <Image 
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Content side */}
            <div className="p-8 md:p-12 md:w-1/2 overflow-y-auto w-full">
              <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {selectedProduct.category}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedProduct.name}</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Deskripsi Produk</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Harga / Pcs</h4>
                    <p className="text-2xl font-bold text-amber-600">
                      Rp {selectedProduct.pricePerOrder.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Min. Order</h4>
                    <p className="text-2xl font-bold text-gray-900">
                      {selectedProduct.minOrder} <span className="text-base font-normal text-gray-500">pcs</span>
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => {
                      const currentQty = quantities[selectedProduct.id] || 0;
                      if (currentQty === 0) {
                        updateQuantity(selectedProduct.id, selectedProduct.minOrder);
                      } else {
                        updateQuantity(selectedProduct.id, currentQty + 10); // arbitrary increment for now
                      }
                      setSelectedProduct(null);
                    }}
                    className="flex-1 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {(quantities[selectedProduct.id] || 0) > 0 ? '+ Tambah Lagi' : 'Tambah ke Keranjang'}
                  </button>
                  
                  {((quantities[selectedProduct.id] || 0) > 0) && (
                    <button 
                      onClick={() => router.push('/cart')}
                      className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Lihat Keranjang
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
