"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    // console.log("id of product is", product._id);
    
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
      <Image
        src={product.image}
        alt={product.name}
        width={400} 
        height={300} 
        className="rounded-md mb-2 object-cover"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
       <Link
        className="btn btn-primary mt-3 w-full"
        href={`/products/${product._id}`}
      >
        View Details
      </Link>
    </div>
  );
}
