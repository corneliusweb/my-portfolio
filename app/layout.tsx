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

export const metadata: Metadata = {
	title: 'Portfolio | Cornelius Asogwa - Frontend Developer',
	description:
		"Hi, I'm Cornelius Asogwa, a frontend developer building accessible fullstack web apps with React, Next.js, TypeScript, and Firebase.",
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
