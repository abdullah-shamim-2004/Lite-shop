"use client";
import React from "react";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "@/app/context/AuthContext";
import Loader from "@/app/components/Loader";
// import toast from "daisyui/components/toast";
import { toast, ToastContainer } from "react-toastify";

const myproducts = () => {
  const { user, loading } = useAuth();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://lite-shop-server.vercel.app/products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [user]);
  if (loading) {
    return <Loader></Loader>;
  }

  const handleEdit = () => {
    toast(
      "sorry! developer do not impliment edit function. Developer will do this when he will find off time."
    );
  };
  // Delete Function
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // If you need auth token, you can add it here:
            // "Authorization": `Bearer ${token}`
          },
        });
        const data = await response.json();
        if (data.success) {
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          setProducts(products.filter((r) => r._id !== id));
        }
      } catch (err) {
        Swal.fire("Error!", err.message, "error");
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="p-6 max-[576px]:p-1.5 max-[576px]:w-fit">
        <ToastContainer/>
        <h2 className="text-2xl font-bold mb-4">
          My Products ({products.length})
        </h2>

        {products.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[60vh] text-center">
            <h2 className="text-4xl font-bold text-gray-600 mb-3">
              No Products Found!
            </h2>
            <p>Please add products</p>
            <Link
              className="btn-primary text-black font-normal bg-primary btn mt-1"
              href="/add-product"
            >
              Click Me
            </Link>
          </div>
        ) : (
          <div className="md:overflow-x-auto max-[576px]:w-fit">
            <table className="table w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Posted</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200} // set appropriate width
                        height={200} // set appropriate height
                        className="rounded-md mb-2 object-cover"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td>{new Date(product.createdAt).toLocaleDateString()}</td>

                    <td className="flex gap-2">
                      <button
                        // href="/"
                        onClick={() => handleEdit()}
                        className="btn btn-sm btn-outline btn-info"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default myproducts;
