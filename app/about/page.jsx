export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">About Lite Shop</h1>

      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
        Welcome to <strong>Lite Shop</strong> — your go-to destination for
        high-quality electronics, gadgets, and accessories.
        We aim to provide a seamless shopping experience with modern design,
        trusted products, and lightning-fast delivery.
      </p>

      {/* Mission Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* <img
          src="https://i.ibb.co.com/9qSgD32/about1.jpg"
          alt="About Lite Shop"
          className="rounded-xl shadow-md"
        /> */}

        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Lite Shop, our mission is simple — to make electronics shopping
            easier, faster, and more reliable. Whether you’re looking for the
            latest smartphones, accessories, or powerful laptops, we ensure top-quality
            products at the best price.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Lite Shop?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">✔ Premium Products</h3>
            <p className="text-gray-600">
              We handpick the best electronic gadgets ensuring top quality.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">✔ Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products quickly with our smooth delivery system.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">✔ Secure Shopping</h3>
            <p className="text-gray-600">
              Your data is protected with the latest security technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-6">Who We Are</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Lite Shop is created and managed by passionate developers and tech lovers.
          We believe in simplicity, performance, and customer satisfaction.
        </p>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-semibold">Thank You for Visiting Lite Shop</h3>
        <p className="text-gray-600 mt-2">
          We’re constantly growing and improving — stay connected!
        </p>
      </div>
    </div>
  );
}
