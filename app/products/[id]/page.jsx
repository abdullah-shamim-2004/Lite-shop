import Image from "next/image";

export default async function details({ params }) {
  const { id } = await params;

  const res = await fetch(`https://lite-shop-server.vercel.app/products/${id}`);
  const products = await res.json();
  const product = (products.product);
  if (!product) {
    return <div>loading</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">
        {/* Product Image */}
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <p className="text-lg text-gray-600 mb-3">
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>

          <p className="text-gray-500 mb-3">
            Category: <span className="font-medium">{product.category}</span>
          </p>

          <p className="text-2xl font-bold text-primary mb-3">
          ট.  {product.price} 
          </p>

          <p className="text-yellow-500 font-semibold mb-3">
            ⭐ Rating: {product.rating}
          </p>

          <p
            className={`font-semibold mb-4 ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>

          <button className="btn btn-primary w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
