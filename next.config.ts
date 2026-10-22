import type { NextConfig } from "next";

// Files in /public are served with `max-age=0` by default, so returning
// visitors would revalidate every video before playing it. Cache the homepage
// media for a week, then refresh in the background. Give a replaced file a new
// name if it has to show up for everyone straight away.
const mediaCache = {
  key: "Cache-Control",
  value: "public, max-age=604800, stale-while-revalidate=2592000",
};

const nextConfig: NextConfig = {
  headers() {
    return [
      { source: "/munni/:path*", headers: [mediaCache] },
      { source: "/videos/:path*", headers: [mediaCache] },
    ];
  },
};

export default nextConfig;
