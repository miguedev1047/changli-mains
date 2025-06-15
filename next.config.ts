import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.wuwatracker.com',
        port: '',
        pathname: '/static/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
