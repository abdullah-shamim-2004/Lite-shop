"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Feauter = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://lite-shop-server.vercel.app/products?limit=8")
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
    return <Loader/>
  }

  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-primary mb-3">
          Featured Products
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Find the best product in our online shop
        </p>
        <div className="w-24 h-1 bg-amber-400 rounded-full mt-4 mx-auto"></div>
      </div>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Feauter;
