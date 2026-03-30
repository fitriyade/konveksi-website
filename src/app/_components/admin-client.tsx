"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  minOrder: number;
  pricePerOrder: number;
  image: string;
  description: string;
}

export default function AdminClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const defaultProduct = {
    id: '', name: '', category: '', minOrder: 1, pricePerOrder: 0, image: '', description: ''
  };
  
  const [editingProduct, setEditingProduct] = useState<Product>(defaultProduct);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products");
      if (res.ok) {
        setProducts(await res.json());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    const method = editingProduct.id ? 'PUT' : 'POST';
    const url = editingProduct.id 
      ? `https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products/${editingProduct.id}`
      : `https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products`;

    const bodyData = { 
      name: editingProduct.name,
      category: editingProduct.category,
      minOrder: Number(editingProduct.minOrder),
      pricePerOrder: Number(editingProduct.pricePerOrder),
      image: editingProduct.image,
      description: editingProduct.description
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });

      if (res.ok) {
        setIsFormOpen(false);
        fetchProducts(); // Refresh list after mutation
      } else {
        alert("Gagal menyimpan produk.");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'post_images');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dcri0cv7x/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        setEditingProduct({ ...editingProduct, image: data.secure_url });
      } else {
        alert('Gagal mengunggah gambar. Coba lagi.');
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan jaringan saat mengunggah gambar.');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah yakin ingin menghapus produk ini? Data tidak bisa dikembalikan.")) return;
    
    try {
      const res = await fetch(`https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        // Optimistic update
        setProducts(prev => prev.filter(p => p.id !== id));
      } else {
        alert("Gagal menghapus produk.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan jaringan.");
    }
  };

  const openAddModal = () => {
    setEditingProduct(defaultProduct);
    setIsFormOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
          <p className="text-gray-500 text-sm">Kelola katalog produk, harga, dan ketentuan pesanan.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:-translate-y-0.5"
        >
          + Tambah Produk
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-20 text-gray-500">Memuat data produk...</div>
      ) : (
        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100 text-xs sm:text-sm text-gray-400">
                <th className="pb-3 font-medium px-2">Gambar</th>
                <th className="pb-3 font-medium px-2">Produk Info</th>
                <th className="pb-3 font-medium px-2">Harga / Min. Order</th>
                <th className="pb-3 font-medium text-right px-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-500">Tidak ada produk.</td>
                </tr>
              ) : (
                products.map((p) => (
                  <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-2 align-middle">
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                        {p.image ? (
                          <Image src={p.image} alt={p.name} fill sizes="64px" className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] sm:text-xs text-gray-400">No Img</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-2 align-middle">
                      <div className="font-bold text-gray-900 text-sm sm:text-base line-clamp-2">{p.name}</div>
                      <div className="font-medium text-gray-500 text-sm sm:text-base line-clamp-2">{p.description}</div>
                      <div className="text-[10px] sm:text-xs text-amber-600 px-2 py-0.5 bg-amber-50 rounded-md inline-block mt-1">{p.category}</div>
                      
                    </td>
                    <td className="py-4 px-2 align-middle">
                      <div className="font-bold text-gray-900 text-sm sm:text-base whitespace-nowrap">Rp {p.pricePerOrder?.toLocaleString('id-ID')}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Min: {p.minOrder} pcs</div>
                    </td>
                    <td className="py-4 px-2 text-right align-middle">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => openEditModal(p)}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-xs sm:text-sm font-semibold hover:bg-blue-100 transition-colors whitespace-nowrap"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(p.id)}
                          className="px-3 py-1.5 bg-red-50 text-red-600 rounded-md text-xs sm:text-sm font-semibold hover:bg-red-100 transition-colors whitespace-nowrap"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingProduct.id ? 'Edit Produk' : 'Tambah Produk Baru'}
            </h2>
            
            <form onSubmit={handleCreateOrUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Produk</label>
                <input 
                  required type="text" 
                  value={editingProduct.name} onChange={e => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Kategori</label>
                  <input 
                    required type="text" placeholder="Misal: Gamis & Dress"
                    value={editingProduct.category} onChange={e => setEditingProduct({...editingProduct, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Minimal Order (pcs)</label>
                  <input 
                    required type="number" min="1"
                    value={editingProduct.minOrder} onChange={e => setEditingProduct({...editingProduct, minOrder: Number(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Harga per Pcs (Rp)</label>
                <input 
                  required type="number" min="0"
                  value={editingProduct.pricePerOrder} onChange={e => setEditingProduct({...editingProduct, pricePerOrder: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gambar Produk</label>
                <div className="flex items-center gap-4">
                {editingProduct.image ? (
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                    <Image src={editingProduct.image} alt="Preview" fill sizes="96px" className="object-cover" />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-400 text-center p-2 shrink-0">
                    Belum ada
                  </div>
                )}
                
                <div className="flex-1">
                  <label className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${isUploadingImage ? 'bg-gray-100 text-gray-400' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}>
                    {isUploadingImage ? 'Mengunggah...' : 'Pilih Gambar'}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden" 
                      disabled={isUploadingImage}
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-2">Upload lgsg dari PC (Max 5MB)</p>
                </div>
              </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea 
                  required rows={3}
                  value={editingProduct.description} onChange={e => setEditingProduct({...editingProduct, description: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button" onClick={() => setIsFormOpen(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Batal
                </button>
                <button 
                  type="submit" disabled={isSaving || isUploadingImage}
                  className="flex-1 px-4 py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-50"
                >
                  {isSaving ? 'Menyimpan...' : 'Simpan Produk'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
