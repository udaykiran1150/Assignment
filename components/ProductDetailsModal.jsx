export default function ProductDetailsModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-sky-900/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-sky-100">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-xl border border-sky-100 shadow"
            />
            <div>
              <h2 className="text-2xl font-bold text-sky-700">{product.name}</h2>
              <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full font-medium">
                {product.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sky-500 hover:text-sky-700 text-2xl font-bold transition"
            title="Close"
          >
            &times;
          </button>
        </header>

        
        <section className="bg-sky-50 rounded-xl p-4 mb-4 border border-sky-100">
          <h3 className="font-semibold text-sky-700 mb-2">Features</h3>
          <ul className="list-disc pl-5 text-sm text-sky-700 space-y-1">
            {product.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>

       
        {product.nutrition && (
          <section className="bg-sky-50 rounded-xl p-4 mb-4 border border-sky-100">
            <h3 className="font-semibold text-sky-700 mb-2">Nutrition</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(product.nutrition).map(([k, v]) => (
                <div key={k} className="flex justify-between py-1">
                  <span className="text-sky-600">{k}</span>
                  <strong className="text-sky-800">{v}</strong>
                </div>
              ))}
            </div>
          </section>
        )}

        
        <section className="bg-sky-50 rounded-xl p-4 mb-4 border border-sky-100 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-sky-700 mb-2">Pricing</h3>
            <p className="text-sm text-sky-600">
              MRP: <span className="line-through">{product.pricing.mrp}</span>
            </p>
            <p className="text-lg font-bold text-sky-700">
              Offer: <span className="bg-sky-200 px-2 py-1 rounded">{product.pricing.offer}</span>
            </p>
          </div>
          <button
            className="px-5 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700 transition"
          >
            Buy Now
          </button>
        </section>

       
        <section className="bg-sky-50 rounded-xl p-4 border border-sky-100">
          <h3 className="font-semibold text-sky-700 mb-2">Reviews</h3>
          <div className="space-y-3">
            {product.reviews.map(r => (
              <div key={r.id} className="p-3 bg-white rounded-lg shadow border border-sky-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sky-800">{r.name}</span>
                  <span className="text-xs bg-sky-200 text-sky-700 px-2 py-0.5 rounded-full">
                    {r.rating}★
                  </span>
                </div>
                <p className="text-sm text-sky-600">{r.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
