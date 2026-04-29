/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sidkron.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
