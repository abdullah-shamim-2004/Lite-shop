"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  // console.log("id of product is", product._id);

  return (
    <div className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="h-56 w-full object-cover group-hover:scale-105 transition-all duration-300"
        />

        {/* Price Badge */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {product.price} ট.
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold group-hover:text-indigo-600 transition">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {product.brand || "Brand Not Available"}
        </p>

        <Link
          className="btn btn-primary mt-4 w-full rounded-lg"
          href={`/products/${product._id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
