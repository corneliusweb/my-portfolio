import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SocialLinks from './SocialLinks';
import { LuArrowUpRight } from 'react-icons/lu';

const ProfileCard = () => {
	return (
		<Card className='w-full flex-1 text-page-txt lg:max-w-2xl mx-auto rounded-md border-accent/10'>
			<Avatar className='w-30 h-30 self-center mb-5 ring-2 ring-accent'>
				<AvatarImage src='https://github.com/corneliusweb.png' alt='profile avatar' />
				<AvatarFallback className='font-bold text-lg text-gray-500 tracking-wider'>
					CA
				</AvatarFallback>
			</Avatar>

			<CardHeader className='text-center'>
				<CardTitle className='text-lg'>Cornelius Asogwa</CardTitle>
				<CardDescription className='max-w-[70ch] mx-auto'>
					A passionate Frontend Developer crafting beautiful & highly
					performant full-stack web applications. Expert in Next.js,
					Firebase, React, and TypeScript.
				</CardDescription>
			</CardHeader>

			<CardFooter className='mx-auto my-5 flex-col items-center'>
				<SocialLinks
					ULClass='flex mb-6'
					IconClass='text-accent group-hover:text-accent-hover'
					LinkClass='cta-btn group'
					size={24}
				/>
				
				<a
					href='#contact'
					className='w-full max-w-60 bg-accent-dark p-2 text-page-bg rounded-md inline-flex justify-center items-center font-medium text-md uppercase hover:bg-accent-hover transition-colors duration-150 ease-in-out'
				>
					<span>Get In Touch</span>
					<LuArrowUpRight
						size={24}
						className='bg-card text-page-txt w-8 h-8 p-1.5 rounded-full ml-2.5'
					/>
				</a>
			</CardFooter>
		</Card>
	);
};
export default ProfileCard;
