import { LuArrowUpRight } from 'react-icons/lu';
import { profile } from '@/public/images';
import SocialLinks from '../SocialLinks';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<section className='mt-22 md:mt-30'>
			<div className='px-4'>
				<p className='text-base text-page-txt/50 uppercase tracking-wide'>
					Hi, I am Cornelius 👋
				</p>
				<h1 className='text-2xl sm:text-4xl uppercase font-bold mt-1'>
					Frontend Developer
				</h1>
				<p className='text-lg tracking-wide text-page-txt/70 my-6 text-pretty'>
					I build full-stack web applications with React, Next.js,
					TypeScript, and Firebase — delivering fast and accessible user
					experiences.
				</p>
				<div className='flex items-center gap-3'>
					<a
						href='#contact'
						className='bg-accent-dark text-page-bg rounded-full flex justify-between items-center w-48 py-1.5 pl-3 pr-1 font-medium text-lg uppercase hover:bg-accent-hover transition-colors duration-150 ease-in-out'
					>
						<span>Get In Touch</span>
						<LuArrowUpRight
							size={24}
							className='bg-card text-text-body w-9 h-9 p-1.5 rounded-full'
						/>
					</a>

					<SocialLinks
						show={['email', 'x', 'facebook']}
						size={24}
						IconClass='text-accent group-hover:text-accent-hover'
						LinkClass='cta-btn group'
						ULClass='flex gap-2'
					/>
				</div>
			</div>
			<Image
				src={profile}
				alt='Cornelius - Frontend Developer'
				className='sm:rounded-md mt-15'
				priority
			/>
		</section>
	);
};
export default HeroSection;
