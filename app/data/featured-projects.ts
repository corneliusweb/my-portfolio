import type { Project } from "../types";
import { spaceTourism, todoApp } from "@/public/images";

export const featuredProjects: Project[] = [
	{
		id: "space-tourism",
		category: "Design",
		name: "Space Tourism Website",
		description:
			"A multi-page responsive website with tab navigation and swipe support for mobile.",
		image: spaceTourism,
		liveURL: "https://cornelius-space.vercel.app",
		githubURL: "https://github.com/iamdevcornelius/space-tourism",
		techStacks: [
			"TypeScript",
			"React",
			"UnHead",
			"Tailwind CSS",
			"TanStack Router",
		],
	},
	{
		id: "todo-app",
		category: "Development",
		name: "Todo List App",
		description:
			"A responsive todo app with login/signup authentication system, populated with dummy data from DummyJSON API.",
		image: todoApp,
		liveURL: "https://cornelius-todo-app-nextjs.vercel.app/",
		githubURL: "https://github.com/iamdevcornelius/todo-app-monorepo",
		techStacks: [
			"TypeScript",
			"Next.js",
			"Prisma",
			"Supabase",
			"Firebase",
			"Tailwind",
			"Tanstack Query",
		],
	},
];
