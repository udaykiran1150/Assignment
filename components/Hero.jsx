import { useState, useEffect } from "react";

const images = [
  "/images/image1.jpeg",
  "/images/images2.jpeg",
  "/images/images3.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 
        animate-[slideUp_1s_ease-out]"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Discover Natural & Organic Products
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6 drop-shadow">
          Pure, eco-friendly, and traceable items crafted for a healthier
          lifestyle. Shop the best from Hedamo today.
        </p>
        <button className="px-6 py-3 bg-white text-slate-800 rounded-full font-medium shadow-md hover:bg-slate-100 transition">
          Explore Products
        </button>
      </div>

      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
