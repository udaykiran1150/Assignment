export default function ProductCard({ product, onOpen }) {
  return (
    <article
      onClick={() => onOpen(product)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 
                 transition-all duration-300 cursor-pointer p-5 max-w-sm border border-gray-100"
    >
    
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl transform hover:scale-105 
                     transition-transform duration-300"
        />
      </div>

      
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          {product.short}
        </p>

      
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(product);
          }}
          className="mt-4 px-5 py-2 rounded-lg text-sm font-medium 
                     bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                     text-white hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 
                     shadow-md hover:shadow-lg transition-all duration-300"
        >
          Know More
        </button>
      </div>
    </article>
  );
}
