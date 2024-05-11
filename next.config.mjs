/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignore typescript type checking
  typescript: {
    ignoreBuildErrors: true,
  },
  // ignore eslint checking
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
