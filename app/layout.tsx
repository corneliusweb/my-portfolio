import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Toaster from '@/components/client/Toaster';

const geistSans = Space_Grotesk({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Inter({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

// SEO Optimization

const siteUrl = 'https://corneliusweb.vercel.app';

export const metadata: Metadata = {
	title: {
		template: '%s | Cornelius Asogwa',
		default: 'Portfolio | Cornelius Asogwa - Frontend Developer',
	},
	description:
		"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
	alternates: {
		canonical: siteUrl,
		languages: {
			'en-US': `${siteUrl}/en`,
		},
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
	authors: [{ name: 'Cornelius Asogwa', url: siteUrl }],
	creator: 'Cornelius Asogwa',
	publisher: 'Cornelius Asogwa',
	applicationName: 'Cornelius Asogwa Portfolio',
	formatDetection: {
		telephone: true,
		email: true,
		address: true,
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteUrl,
		siteName: 'Cornelius Asogwa Portfolio',
		title: 'Cornelius Asogwa - Frontend Developer',
		description:
			"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
		images: [
			{
				url: `${siteUrl}/images/corneliusweb.png`,
				width: 1200,
				height: 630,
				alt: 'Cornelius Asogwa - Frontend Developer',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@corneliusweb_',
		creator: '@corneliusweb_',
		title: 'Cornelius Asogwa - Frontend Developer',
		description:
			"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase. Explore my projects and get in touch!",
		images: [`${siteUrl}/images/corneliusweb.png`],
	},
	verification: {
		google: 'howUca1R_yY51W14dNXBXvFEfEyNL0naLuoh8p-ovu0',
		yandex: '58f3a22663a1e0d7',
	},
	appleWebApp: {
		capable: true,
		title: 'Cornelius Asogwa',
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
	manifest: '/public/manifest.json',
	other: {
		google: 'notranslate',
	},
};

// TO-DO: create 512 favicon and let Next handle the rest

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
