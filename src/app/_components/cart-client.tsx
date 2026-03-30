"use client";

import { useState } from 'react';
import Image from 'next/image';
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

export default function CartClient({ products }: { products: Product[] }) {
  const { quantities, updateQuantity, setQuantities } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Get unique categories from products
  const categories = ['all', ...new Set(products.map(p => p.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Calculate totals
  const selectedProducts = products.filter(p => quantities[p.id] > 0);
  const totalItems = selectedProducts.reduce((sum, p) => sum + (quantities[p.id] || 0), 0);
  const totalPrice = selectedProducts.reduce((sum, p) => sum + (p.pricePerOrder * (quantities[p.id] || 0)), 0);

  const handleQuantityChange = (productId: string, value: string, minOrder: number) => {
    let numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0) {
      numValue = 0;
    }
    updateQuantity(productId, numValue);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalItems === 0) {
      alert("Pilih setidaknya satu produk yang ingin dipesan.");
      return;
    }

    if (!paymentMethod) {
      alert("Silakan pilih metode pembayaran terlebih dahulu.");
      return;
    }

    // Validate min orders
    const invalidItems = selectedProducts.filter(p => quantities[p.id] < p.minOrder);
    if (invalidItems.length > 0) {
      const names = invalidItems.map(p => `${p.name} (Min. ${p.minOrder} pcs)`).join("\n- ");
      alert(`Pesanan tidak memenuhi minimal order untuk:\n- ${names}`);
      return;
    }

    // Show success notification
    setIsSuccess(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Form Pemesanan / Cart</h1>
        <p className="text-gray-600">Pilih produk dan tentukan jumlah pcs untuk setiap katalog yang ingin Anda pesan.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Product List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar Produk</h2>
            
            {/* Category Filter */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex gap-2 sm:gap-3 pb-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-amber-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'Semua' : category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-amber-200 transition-colors">
                  <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{product.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-amber-600 font-bold">
                        Rp {product.pricePerOrder.toLocaleString('id-ID')} <span className="text-xs font-normal text-gray-500">/ pcs</span>
                      </div>
                      <div className="text-sm text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-200">
                        Min: {product.minOrder} pcs
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end justify-center sm:w-32 shrink-0 border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 sm:pl-4">
                    <label className="text-xs text-gray-500 mb-2">Jumlah Order (pcs)</label>
                    <input 
                      type="number" 
                      min="0"
                      value={quantities[product.id] || ''}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value, product.minOrder)}
                      placeholder="0"
                      className="w-full text-center py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-semibold text-gray-900"
                    />
                    
                    {(quantities[product.id] > 0 && quantities[product.id] < product.minOrder) && (
                      <p className="text-xs text-red-500 mt-2 text-center w-full">Kurang dari min. order</p>
                    )}
                  </div>
                </div>
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  Tidak ada produk dalam kategori ini
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Checkout Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h2>
            
            <div className="space-y-4 mb-8">
              {selectedProducts.map(p => (
                <div key={p.id} className="flex justify-between items-start text-sm border-b border-gray-100 pb-4">
                  <div className="pr-4">
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-gray-500">{quantities[p.id]} pcs x Rp {p.pricePerOrder.toLocaleString('id-ID')}</p>
                  </div>
                  <div className="font-bold text-gray-900 shrink-0">
                    Rp {(quantities[p.id] * p.pricePerOrder).toLocaleString('id-ID')}
                  </div>
                </div>
              ))}

              {selectedProducts.length === 0 && (
                <div className="text-center py-6 text-gray-400 text-sm">
                  Belum ada produk yang ditambahkan.
                </div>
              )}
            </div>

            <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Produk</span>
                <span className="font-semibold text-gray-900">{totalItems} pcs</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-gray-900">Total Budget</span>
                <span className="font-bold text-amber-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <h3 className="font-bold text-gray-900 mb-2">Data Pelanggan</h3>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Nama Lengkap</label>
                <input 
                  required
                  type="text" 
                  value={customerInfo.name}
                  onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Nomor WhatsApp</label>
                <input 
                  required
                  type="text" 
                  value={customerInfo.phone}
                  onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Alamat Pengiriman</label>
                <textarea 
                  required
                  rows={3}
                  value={customerInfo.address}
                  onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Catatan (Opsional)</label>
                <textarea 
                  rows={2}
                  value={customerInfo.notes}
                  onChange={e => setCustomerInfo({...customerInfo, notes: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Metode Pembayaran</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['BCA', 'BNI', 'MANDIRI', 'OVO'].map((method) => (
                    <label 
                      key={method}
                      className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMethod === method 
                          ? 'border-amber-500 bg-amber-50 text-amber-700 font-bold' 
                          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value={method} 
                        className="hidden"
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <span className={paymentMethod === method ? 'text-amber-700 font-bold' : 'text-gray-700'}>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                className={`w-full py-4 mt-6 rounded-xl font-bold text-white transition-all ${
                  totalItems > 0 
                  ? 'bg-amber-500 hover:bg-amber-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5' 
                  : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Bayar Sekarang
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl leading-none">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Checkout Berhasil!</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Silakan selesaikan pembayaran via <strong>{paymentMethod}</strong> sebesar <strong className="text-amber-600">Rp {totalPrice.toLocaleString('id-ID')}</strong>. Kami akan segera menghubungimu untuk konfirmasi pesanan lebih lanjut.
            </p>
            <button 
              onClick={() => {
                setIsSuccess(false);
                setQuantities({});
                setPaymentMethod('');
                setCustomerInfo({ name: '', phone: '', address: '', notes: '' });
                window.scrollTo(0, 0);
              }}
              className="w-full py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Kembali Belanja
            </button>
          </div>
        </div>
      )}
    </div>
  );
}