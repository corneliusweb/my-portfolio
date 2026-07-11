import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	reactCompiler: isProd,
	compiler: {
		// automatically remove console logs from production
		removeConsole: isProd,
	},
};

export default nextConfig;
