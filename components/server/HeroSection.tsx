import { LuArrowUpRight } from 'react-icons/lu';
// import { corneliusweb } from '@/public/images';
import SocialLinks from '../server/SocialLinks';
// import Image from 'next/image';
import ProfileCard from '../server/ProfileCard';

const HeroSection = () => {
	return (
		<section className='lg-section-wrapper'>
			<div className='flex-1'>
				<p className='text-base text-page-txt/50 uppercase tracking-wide'>
					Hi, I am Cornelius 👋
				</p>

				<h1 className='text-2xl sm:text-4xl uppercase font-bold mt-1'>
					Frontend Developer
				</h1>

				<p className='md:text-lg sm:tracking-wide text-page-txt/70 my-6'>
					I build full-stack web applications with Next.js, Firebase,
					React, and TypeScript; delivering fast and accessible user
					experiences.
				</p>
			</div>

			<ProfileCard />
		</section>
	);
};
export default HeroSection;
