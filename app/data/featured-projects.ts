import type { Project } from '../types';
import { spaceTourism, creditCard } from '@/public/images';

export const featuredProjects: Project[] = [
	{
		id: 'space-tourism',
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
		id: 'credit-card',
		name: 'Interactive Card Details Form',
		description:
			'A responsive form project that updates and validates card details in real-time.',
		image: creditCard,
		liveURL: 'https://cornelius-cards.vercel.app',
		githubURL: 'https://github.com/corneliusweb/credit-card',
		techStacks: ['React', 'TypeScript', 'Zod', 'Tailwind CSS'],
	},
];
