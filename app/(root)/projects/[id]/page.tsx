import { projects } from '@/app/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import {
	LuChevronLeft,
	LuExternalLink,
	LuGithub,
	LuInfo,
} from 'react-icons/lu';

const Projects = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	const project = projects.find((p) => p.id === id);

	if (!project) return <p>Project not found</p>;

	const {
		name,
		category,
		image,
		description,
		challenges,
		addedFeatures,
		solution,
		liveURL,
		githubURL,
		techStacks,
		date,
		role,
	} = project;

	return (
		<article className='tracking-wide leading-7 space-y-12'>
			<Link href={'/projects'} className='x-link group'>
				<LuChevronLeft size={24} className='group-hover:animate-pulse' />
				Back to Projects
			</Link>

			<section className='bg-card max-w-3xl p-5 rounded-md mx-auto lg:p-10'>
				<figure>
					<Image
						src={image}
						alt={`${name} screenshot`}
						loading='lazy'
						className='rounded-md'
					/>

					<figcaption className='my-4 space-y-4'>
						<h1 className='text-2xl'>{name}</h1>
						<p>{description}</p>
					</figcaption>
				</figure>

				<div className='my-8 space-y-3.5 max-w-3xl mx-auto'>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Date</span>
						<span className='text-page-txt'>{date}</span>
					</p>
					<p className='flex-between border-b border-accent/15 pb-1.5'>
						<span className='font-medium'>Role</span>
						<span className='text-page-txt'>{role}</span>
					</p>
				</div>

				<div className='space-x-3 my-7 lg:mt-16 lg:mb-0 lg:text-center'>
					<a
						href={liveURL}
						target='_blank'
						rel='noopener noreferrer'
						className='x-link group'
					>
						View Live
						<LuExternalLink className='group-hover:animate-pulse' />
					</a>

					{category !== 'Client Work' && (
						<a
							href={githubURL}
							target='_blank'
							rel='noopener noreferrer'
							className='x-link group'
						>
							View Code
							<LuGithub className='group-hover:animate-pulse' />
						</a>
					)}
				</div>
			</section>

			<div className='space-y-9 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0'>
				{challenges && (
					<section className='project-details-descr-section'>
						<h3
							title="The project's code challenge"
							className='project-details-descr-heading group'
						>
							Challenge
							<LuInfo className='project-details-descr-icon group-hover:animate-pulse' />
						</h3>

						<ol className='project-details-descr-list list-decimal'>
							{challenges.map((challenge) => (
								<li key={challenge}>{challenge}</li>
							))}
						</ol>
					</section>
				)}

				{addedFeatures && (
					<section className='project-details-descr-section'>
						<h3
							title='Features outside the challenge that I added.'
							className='project-details-descr-heading group'
						>
							Added Features
							<LuInfo className='project-details-descr-icon group-hover:animate-pulse' />
						</h3>

						<ol className='project-details-descr-list list-decimal'>
							{addedFeatures.map((feat) => (
								<li key={feat}>{feat}</li>
							))}
						</ol>
					</section>
				)}

				{solution && (
					<section className='project-details-descr-section'>
						<h3
							title='How I approached/solved the challenge.'
							className='project-details-descr-heading group'
						>
							My Solution
							<LuInfo className='project-details-descr-icon group-hover:animate-pulse' />
						</h3>
						<p className='max-w-lg mx-auto'>{solution}</p>
					</section>
				)}

				{techStacks && (
					<section className='project-details-descr-section'>
						<h3
							title='The technologies I used to solve the challenge.'
							className='project-details-descr-heading group'
						>
							Tech Stacks
							<LuInfo className='project-details-descr-icon group-hover:animate-pulse' />
						</h3>

						<ul className='flex flex-wrap gap-2.5 my-3 text-page-txt justify-center items-center list-separator'>
							{techStacks.map((tech) => (
								<li key={tech}>{tech}</li>
							))}
						</ul>
					</section>
				)}
			</div>
		</article>
	);
};
export default Projects;
