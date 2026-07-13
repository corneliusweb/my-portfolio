import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: "Cornelius Asogwa Portfolio",
		short_name: "DevCornelius",
		description:
			"A curious fullstack developer crafting fast and accessible web apps.",
		start_url: "/",
		theme_color: "#18181b",
		background_color: "#18181b",
		display: "standalone",

		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
};

export default manifest;
