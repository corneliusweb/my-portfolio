'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuMenu, LuSquareX } from 'react-icons/lu';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const pathname = usePathname();

	// helper func for active links
	const isActive = (path: string) => pathname === path;

	// close menu when outside nav is clicked
	const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as Element;

		if (target === e.currentTarget) setIsNavOpen(false);
	};

	// close menu when link is clicked
	const handleNavLinkClick = (e: React.MouseEvent<HTMLUListElement>) => {
		const target = e.target as Element;
		const link = target.closest('a');
		if (link) setIsNavOpen(false);
	};

	// disable scroll when nav is open
	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		// cleanup
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isNavOpen]);

	return (
		<header className='fixed top-0 w-full bg-page-bg z-1000'>
			<div className='border-0 flex justify-between items-center px-4 relative sm:border-b-3 sm:border-b-white/10'>
				<h1>
					<Link
						href='/'
						aria-label='Cornelius Asogwa homepage'
						className='text-xl lg:text-2xl uppercase font-semibold'
					>
						Cornelius Asogwa
					</Link>
				</h1>

				<button
					type='button'
					aria-controls='primary-navigation'
					aria-expanded={isNavOpen}
					onClick={() => setIsNavOpen(!isNavOpen)}
					className='sm:hidden z-50'
				>
					<span className='sr-only'>Menu/Close button</span>
					{isNavOpen ?
						<LuSquareX
							size={35}
							className='my-6 transition-colors duration-200 ease-linear text-accent hover:fill-accent-hover hover:text-card'
						/>
					:	<LuMenu
							size={35}
							className='my-6 text-accent hover:accent-accent-dark'
						/>
					}
				</button>

				<nav
					id='primary-navigation'
					aria-label='Main navigation'
					className={`sm:block ${
						isNavOpen ?
							'fixed inset-0 min-h-screen flex items-center transition-all duration-300 ease-linear justify-end bg-transparent backdrop-blur-xs w-screen'
						:	'hidden'
					}`}
					onClick={handleBackdropClick}
				>
					<ul
						onClick={handleNavLinkClick}
						className='bg-card h-screen w-5/7 px-10 py-20 space-y-8 sm:bg-transparent sm:flex sm:px-0 sm:h-auto sm:space-y-0 sm:w-auto sm:py-0'
					>
						<li>
							<Link
								href='/'
								className={`nav-link ${isActive('/') && 'active-link'}`}
							>
								Home
							</Link>
						</li>

						<li>
							<Link
								href='/about'
								className={`nav-link ${
									isActive('/about') && 'active-link'
								}`}
							>
								About
							</Link>
						</li>

						<li>
							<Link
								href='/projects'
								className={`nav-link ${
									isActive('/projects') && 'active-link'
								}`}
							>
								Projects
							</Link>
						</li>

						<li>
							<Link
								href='/contact'
								className={`nav-link ${
									isActive('/contact') && 'active-link'
								}`}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Header;
