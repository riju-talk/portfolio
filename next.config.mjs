/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out on `next build` (for VPS / any static host).
  output: "export",

  // Serve each route as a directory with an index.html (/about/ -> /about/index.html),
  // which plain file servers like nginx handle without extra rewrites.
  trailingSlash: true,

  // No Next.js image optimization server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
