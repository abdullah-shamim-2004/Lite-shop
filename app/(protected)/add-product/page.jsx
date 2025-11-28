"use client";

import Loader from "@/app/components/Loader";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import { useAuth } from "@/app/context/AuthContext";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const { user, loading } = useAuth();
  //   console.log(user);
  if (loading) {
    return <Loader></Loader>
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const stock = parseInt(form.stock.value);
    const description = form.description.value;
    const userEmail = form.email.value;
    const userName = form.user_name.value;

    const newProduct = {
      name,
      brand,
      category,
      image,
      price,
      rating,
      stock,
      description,
      userEmail,
      userName,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://lite-shop-server.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add product!");
      }
    } catch (error) {
      toast.error("Server Error: " + error.message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-base-200 flex justify-center items-center py-10">
        <ToastContainer />

        <form
          onSubmit={handleAddProduct}
          className="bg-base-100 p-8 rounded-2xl shadow-lg w-full max-w-3xl"
        >
          <h2 className="text-3xl font-extraboldbold text-center mb-8">
            Create <span className="text-primary">Your Product</span>
          </h2>

          {/* Product Name */}
          <div className="mb-4">
            <label className="label font-medium text-black">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Product name..."
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="label font-medium text-black">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Brand name..."
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="label font-medium text-black">Category</label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Electronics"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label className="label font-medium text-black">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="https://image-link.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="label font-medium  text-black">Price (BDT)</label>
            <input
              type="number"
              name="price"
              placeholder="00"
              className="input input-bordered w-full"
              required
              min="1"
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="label font-medium text-black">Rating (1–5)</label>
            <input
              type="number"
              name="rating"
              placeholder="4.5"
              min="0"
              max="5"
              step="0.1"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Stock */}
          <div className="mb-4">
            <label className="label font-medium text-black">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              placeholder="10"
              min="0"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6 ">
            <label className="label font-medium text-black">
              Product Description
            </label>
            <textarea
              name="description"
              placeholder="Type product details..."
              className="textarea  textarea-bordered w-full min-h-[100px]"
              required
            />
          </div>
          {/* User Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* user email */}
            <div>
              <label className="label font-medium text-black">User Email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. example@email.com"
                className="input input-bordered w-full"
                defaultValue={user?.email}
                readOnly
              />
            </div>
            {/* user name */}
            <div>
              <label className="label font-medium text-black">User Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="e.g. Artisan Roasters"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary  w-full bg-primary text-white mt-4"
          >
            Add Product
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};

export default AddProduct;
