"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://lite-shop-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-[80vh]">
      <div>
        <div className="flex flex-col items-center text-center my-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary mb-3">
            All Products
          </h1>
          <p className="text-gray-600 max-w-xl">here all products</p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-4"></div>
        </div>

        <div className="my-3.5 mb-4 flex justify-between items-center">
          <h3 className="text-xl lg:text-2xl font-semibold">
            (<span>{products.length}</span>) Product Found
          </h3>
          <label className="input flex items-center border rounded-md px-2">
            <svg
              className="h-[1em] opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              // onChange={handleSearching}
              type="search"
              placeholder="Search"
              className="outline-none w-full"
            />
          </label>
        </div>

        <ul className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
