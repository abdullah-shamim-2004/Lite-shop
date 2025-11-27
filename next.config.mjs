// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Compiler কনফিগারেশন
  reactCompiler: true, 

  // Image Optimization কনফিগারেশন
  images: {
    // এখানে আপনার অনুমোদিত ডোমেইনগুলো যুক্ত করুন
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // আপনার হোস্টনেম
        port: '', // সাধারণত ইমেজ হোস্টের জন্য পোর্ট দরকার হয় না
        pathname: '/**', // এই ডোমেইনের যেকোনো পাথ থেকে ইমেজ লোড করার অনুমতি
      },
     
    ],
  },
  
  
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;