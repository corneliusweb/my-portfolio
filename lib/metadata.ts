import { Project } from '@/app/types';
import { Metadata } from 'next';

const siteConfig: Record<string, string> = {
	siteName: 'Cornelius Asogwa',
	siteTitle: 'Cornelius Asogwa - Frontend Developer',
	twitter: '@corneliusweb_',
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const baseMetadata: Metadata = {
	title: {
		template: `%s | ${siteConfig.siteName}`,
		default: siteConfig.siteTitle,
	},
	description:
		"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
	alternates: {
		canonical: siteConfig.siteUrl,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-video-preview': -1,
			'max-snippet': -1,
		},
	},
	authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
	creator: siteConfig.siteName,
	publisher: siteConfig.siteName,
	applicationName: `${siteConfig.siteName} Portfolio`,
	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.siteUrl,
		siteName: 'Cornelius Asogwa Portfolio',
		title: siteConfig.siteTitle,
		description:
			"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
		images: [
			{
				url: `${siteConfig.siteUrl}/images/corneliusweb.png`,
				width: 1200,
				height: 630,
				alt: siteConfig.siteTitle,
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: siteConfig.twitter,
		creator: siteConfig.twitter,
		title: siteConfig.siteTitle,
		description:
			"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
		images: [`${siteConfig.siteUrl}/images/corneliusweb.png`],
	},
	verification: {
		google: 'howUca1R_yY51W14dNXBXvFEfEyNL0naLuoh8p-ovu0',
		yandex: '58f3a22663a1e0d7',
	},
	appleWebApp: {
		capable: true,
		title: siteConfig.siteName,
		statusBarStyle: 'black-translucent',
	},
	category: 'technology',
	keywords: [
		'frontend developer',
		'front-end developer',
		'web developer',
		'React developer',
		'Next.js developer',
		'Next developer',
		'JavaScript',
		'TypeScript',
		'Firebase',
		'portfolio',
		'Cornelius Asogwa',
		'fullstack developer',
		'accessible web apps',
		'fullstack web apps',
	],
	other: {
		google: 'notranslate',
	},
};

export const aboutMetadata: Metadata = {
	title: 'About Me',
	description:
		'Learn about Cornelius Asogwa - my journey as a frontend developer, technical skills, and work experience.',

	openGraph: {
		title: `About ${siteConfig.siteName}`,
		description: 'Learn about my journey as a frontend developer.',
		url: `${siteConfig.siteUrl}/about`,
	},
};

export const projectsMetadata: Metadata = {
	title: 'Projects',
	description:
		'Explore my portfolio of web development projects including React applications, Next.js websites, and Firebase apps.',

	openGraph: {
		title: `Projects by ${siteConfig.siteName}`,
		description: 'Explore my web development portfolio.',
		url: `${siteConfig.siteUrl}/projects`,
	},
};

export const contactMetadata: Metadata = {
	title: 'Contact Me',
	description:
		'Get in touch with Cornelius Asogwa for web development projects, collaborations, or job opportunities.',

	openGraph: {
		title: `Contact ${siteConfig.siteName}`,
		description: 'Get in touch for web development projects.',
		url: `${siteConfig.siteUrl}/contact`,
	},
};

export function createProjectMetadata(project: Project) {
   // create project titles from the project id
	const createTitle = () => {
		const { id: projectName } = project;

		if (projectName.includes('-')) {
			return projectName
				.split('-')
				.map((word) => word.at(0)?.toUpperCase() + word.slice(1))
				.join(' ');
		} else {
			return (projectName.at(0)?.toUpperCase() ?? '') + projectName.slice(1);
		}
	};
	return {
		title: `${createTitle()} | ${siteConfig.siteName}`,
		description: project.description,

		openGraph: {
			title: `${project.id} - Project by ${siteConfig.siteName}`,
			description: project.description,
			url: `${siteConfig.siteUrl}/projects/${project.id}`,
			type: 'article' as const,
		},
	};
}
