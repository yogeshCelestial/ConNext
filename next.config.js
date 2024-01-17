/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'hitwebcounter.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    },
  
}
  
module.exports = nextConfig
  