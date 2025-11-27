// import Link from "next/link";
// import React from 'react';
// async function getProductDetails(id) {
//   const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(
//       `Failed to fetch product with ID: ${id}. Status: ${res.status}`
//     );
//   }

//   return res.json();
// }

// export default async function ProductDetails({ params }) {
//   const { id } = params;

//   const product = await getProductDetails(id);

//   if (!product) {
//     return (
//       <div className="max-w-xl mx-auto p-6 text-center text-red-500">
//         <h1 className="text-2xl font-bold">Product Not Found</h1>
//         <p className="mt-2">The product with ID {id} does not exist.</p>
//         <Link href="/products" className="text-indigo-500 mt-4 block">
//           ← Back to Product List
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
//       <p className="text-gray-500">{product.brand}</p>

//       <div className="mt-4">
//         <p className="text-xl font-semibold">Price: ${product.price}</p>
//         <p className="mt-2">{product.description}</p>

//         <p className="text-sm text-gray-400 mt-4">
//           Posted by: {product.userName} ({product.userEmail})
//         </p>
//       </div>
//     </div>
//   );
// }
// import { data } from 'autoprefixer';
// import React from "react";

// const productDetails =  ({ params }) => {
//    const id = params.id;
//    console.log("id",id);

//   const res = await fetch(`http://localhost:3000/products/${id}`, {
//     cache: "no-store",
//   });
//   const product = res.json();

//   return <div>{product.name}</div>;
//   return <div>hi</div>;
// };

// export default productDetails;
// export default async function details(params) {
 
  // const id = params.id;
  // console.log("params",params);
  // return <div>hi</div>
// }
