import type { Project } from '../types';
import { spaceTourism, creditCard, sneakers, todoApp } from '@/public/images';

export const projects: Project[] = [
	{
		id: 'space-tourism',
		category: 'Design',
		name: 'Space Tourism Website',
		description:
			'A multi-page responsive space tourism website with dynamic routing, swipe and tab navigation.',
		challenges: [
			'Responsive layout for each page depending on screen size',
			'Hover states for all interactive elements',
			'Tab navigation to toggle between different content sections',
		],
		addedFeatures: [
			'Swipe navigation enabled for mobile and tablet screens on Crew page',
			'Used TanStack Router to handle dynamic rendering of sub-page contents',
			'Each sub-page is sharable & persists after refresh',
		],
		solution:
			'Built a scalable multi-page architecture using TanStack Router for routing and dynamic content handling, while ensuring accessibility and responsiveness across devices.',
		image: spaceTourism,
		liveURL: 'https://cornelius-space.vercel.app',
		githubURL: 'https://github.com/corneliusweb/space-tourism',
		techStacks: [
			'Vite',
			'React',
			'TypeScript',
			'Tailwind',
			'Tanstack Router',
		],
		date: '2025',
		role: 'Frontend Developer',
	},
	{
		id: 'todo-app',
		category: 'Development',
		name: 'Todo List App',
		description:
			'A responsive todo app with login/signup authentication system, populated with dummy data from DummyJSON API.',
		// challenges: [],
		solution: '',
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
		date: '2025',
		role: 'Frontend Developer',
	},
	{
		id: 'sneakers',
		category: 'Design',
		name: 'E-commerce Product Page',
		description:
			'Dynamic product display with lightbox, add to cart functionality and responsive design.',
		challenges: [
			'Responsive layout for different screen sizes',
			'Hover states for interactive elements',
			'Lightbox gallery for product images',
			'Thumbnail image switching',
			'Add items to the cart',
			'View and remove items from the cart',
		],
		addedFeatures: [
			'Dynamic rendering of products from a constants file',
			'Reusable components for scalability',
			'Support for multiple products with individual states',
			'Cart management for multiple products',
		],
		solution:
			'Structured the project with reusable components and centralized product data to make future expansion easy.',
		image: sneakers,
		liveURL: 'https://cornelius-sneakers.vercel.app',
		githubURL: 'https://github.com/corneliusweb/sneakers',
		techStacks: ['Vite', 'React', 'TypeScript', 'Tailwind'],
		date: '2025',
		role: 'Frontend Developer',
	},
	{
		id: 'credit-card',
		category: 'Design',
		name: 'Interactive Card Details Form',
		description:
			'A responsive form project that validates input data and updates card details or errors in real-time.',
		challenges: [
			'Fill in the form and see the card details update in real-time',
			'Receive error messages when inputs are empty or invalid',
			'Responsive layout for different devices',
			'Hover, active, and focus states for interactive elements',
		],
		solution:
			'Used React state to sync form inputs with the card preview and Zod + TypeScript for validation logic.',
		image: creditCard,
		liveURL: 'https://cornelius-cards.vercel.app',
		githubURL: 'https://github.com/corneliusweb/credit-card',
		techStacks: ['Vite', 'React', 'JavaScript', 'Tailwind', 'Zod'],
		date: '2025',
		role: 'Frontend Developer',
	},
];
