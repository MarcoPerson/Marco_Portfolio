/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Using plain <img> tags (as in the original CRA app), so the built-in
  // Image Optimization is not required. This keeps behaviour identical.
};

module.exports = nextConfig;
