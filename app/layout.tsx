import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Toaster from '@/components/client/Toaster';
import { baseMetadata } from '@/lib/metadata';

const geistSans = Space_Grotesk({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Inter({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = baseMetadata;

// TO-DO: create 512 favicon and let Next handle the rest

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-scroll-behavior='smooth'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
