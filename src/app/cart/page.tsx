import CartClient from "../_components/cart-client";

export default async function CartPage() {
  let products = [];
  try {
    const res = await fetch("https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products", {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main className="bg-gray-50 min-h-screen pt-24 pb-12">
      <CartClient products={products} />
    </main>
  );
}
