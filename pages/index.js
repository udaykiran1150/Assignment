import { useState } from "react";
import { products } from "@/data/product"; 
import ProductCard from "@/components/ProductCard";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Product Showcase */}
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Hedamo — Product Showcase</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setActive} />
          ))}
        </div>
      </main>

      {/* Product Details Modal */}
      {active && (
        <ProductDetailsModal product={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
