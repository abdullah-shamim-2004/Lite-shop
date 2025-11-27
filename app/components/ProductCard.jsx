"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
      {/* <Image
        src={product.image}
        alt={product.name}
        width={400} // set appropriate width
        height={300} // set appropriate height
        className="rounded-md mb-2 object-cover"
      /> */}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-2 btn btn-primary w-full">View Details</button>
    </div>
  );
}
