import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    // automatically remove console logs from production
		removeConsole: process.env.NODE_ENV === 'production',
	},
};

export default nextConfig;
