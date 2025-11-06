import Header from '../../components/Header';

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			<main className='grid gap-20 px-6 mb-12 selection:bg-accent-dark/10 selection:text-accent'>
				{children}
			</main>
		</>
	);
}
