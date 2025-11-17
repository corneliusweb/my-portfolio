import Header from '../../components/Header';

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			<main className='space-y-18.5 px-4 mt-30 mb-12 selection:bg-accent-dark/10 selection:text-accent max-w-page-max mx-auto sm:px-6'>
				{children}
			</main>
		</>
	);
}
