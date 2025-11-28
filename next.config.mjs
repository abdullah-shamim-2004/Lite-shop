

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactCompiler: true, 

 
  images: {
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**', 
      },
     
    ],
  },
  
  
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;