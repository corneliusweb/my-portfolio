import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

const About = () => {
	return (
		<section className='lg:flex lg:gap-12 lg:items-center'>
			<h2 className='section-heading flex-1'>About Me</h2>

			<div className='flex-1'>
				<p className='leading-6.5 tracking-wide'>
					My journey into web development began with a curiosity about how{' '}
					<em>The&nbsp;Web</em> works. As I dived deeper, I didn't just
					find answers; I fell in love with the craft. Gradually, that
					curiosity grew into a passion that now drives me to create
					thoughtful, user-focused digital experiences. I enjoy learning,
					experimenting, and bringing ideas to life through code.
				</p>

				<Link
					href='/about'
					className='flex gap-0.5 mt-2 items-center text-accent w-fit hover:text-accent-hover'
				>
					Learn more about me <LuArrowUpRight />
				</Link>
			</div>
		</section>
	);
};
export default About;
