import type { Project } from '../types';
import { spaceTourism, todoApp } from '@/public/images';

export const featuredProjects: Project[] = [
	{
		id: 'space-tourism',
		category: 'Design',
		name: 'Space Tourism Website',
		description:
			'A multi-page responsive website with tab navigation and swipe support for mobile.',
		image: spaceTourism,
		liveURL: 'https://cornelius-space.vercel.app',
		githubURL: 'https://github.com/corneliusweb/space-tourism',
		techStacks: [
			'React',
			'TypeScript',
			'UnHead',
			'Tailwind CSS',
			'TanStack Router',
		],
	},
	{
		id: 'todo-app',
		category: 'Development',
		name: 'Todo List App',
		description:
			'A responsive todo app with login/signup authentication system, populated with dummy data from DummyJSON API.',
		image: todoApp,
		liveURL: 'https://cornelius-todo-app-nextjs.vercel.app/',
		githubURL: 'https://github.com/corneliusweb/todo-app-monorepo',
		techStacks: [
			'Next.js',
			'Firebase',
			'TypeScript',
			'Tailwind',
			'Tanstack Query',
		],
	},
];
