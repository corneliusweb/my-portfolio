import { Project } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuExternalLink, LuGithub } from 'react-icons/lu';

const ProjectCard = ({
	id,
	name,
	image,
	description,
	liveURL,
	githubURL,
	date,
	role,
}: Project) => {
	return (
		<article className='leading-7 lg:flex lg:justify-between lg:items-center lg:gap-15'>
			<figure className='flex-1'>
				<div className='rounded-md bg-card p-6 mb-8 border border-accent/10 sm:p-10'>
					<Image
						src={image}
						alt={`${name} screenshot`}
						loading='lazy'
						className='rounded-md'
					/>
				</div>
			</figure>

			<section className='flex-1'>
				<h2 className='font-grotesk tracking-wide text-2xl mb-1.5'>
					{name}
				</h2>
				<p className='text-page-txt text-base'>{description}</p>

				<section className='my-6 space-y-3.5'>
					<h3 className='uppercase text-lg font-medium tracking-wide'>
						Project info
					</h3>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Year</span>
						<span className='text-page-txt'>{date}</span>
					</p>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Role</span>
						<span className='text-page-txt'>{role}</span>
					</p>
				</section>

				<div className='space-x-3 max-w-79 mx-auto lg:mx-0'>
					<a
						href={liveURL}
						target='_blank'
						rel='noopener noreferrer'
						className='x-link group'
					>
						View Live
						<LuExternalLink className='group-hover:animate-pulse' />
					</a>
					<a
						href={githubURL}
						target='_blank'
						rel='noopener noreferrer'
						className='x-link group'
					>
						View Code
						<LuGithub className='group-hover:animate-pulse' />
					</a>
					<Link href={`/projects/${id}`} className='x-link group'>
						Project Details
						<LuArrowRight
							size={20}
							className='group-hover:animate-pulse'
						/>
					</Link>
				</div>
			</section>
		</article>
	);
};
export default ProjectCard;
