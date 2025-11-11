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
		<article className='leading-7 lg:flex lg:justify-between lg:items-center lg:gap-12'>
			<figure className='w-full lg:w-md xl:w-xl'>
				<div className='rounded-md bg-card p-6 mb-8 border border-accent/10 sm:p-10'>
					<Image
						src={image}
						alt={`${name} screenshot`}
						loading='lazy'
						className='rounded-md'
					/>
				</div>
			</figure>

			<section className='lg:w-md xl:w-lg'>
				<h2 className='font-grotesk tracking-wide text-2xl mb-0.5'>
					{name}
				</h2>
				<p className='text-page-txt'>{description}</p>

				<section className='my-6 space-y-3.5'>
					<h3 className='uppercase text-lg font-medium'>Project info</h3>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Year</span>
						<span className='text-page-txt'>{date}</span>
					</p>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Role</span>
						<span className='text-page-txt'>{role}</span>
					</p>
				</section>

				<div className='space-x-3'>
					<a
						href={liveURL}
						target='_blank'
						rel='noopener noreferrer'
						className='project-card-link'
					>
						View Live
						<LuExternalLink />
					</a>
					<a
						href={githubURL}
						target='_blank'
						rel='noopener noreferrer'
						className='project-card-link'
					>
						View Code
						<LuGithub />
					</a>
					<Link href={`/projects/${id}`} className='project-card-link'>
						Project Details
						<LuArrowRight size={20} />
					</Link>
				</div>
			</section>
		</article>
	);
};
export default ProjectCard;
