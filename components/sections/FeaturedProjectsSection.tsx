import { SiGithub } from 'react-icons/si';
import { featuredProjects } from '@/app/data/featured-projects';
import { LuArrowUpRight } from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
	return (
		<section>
			<h2 className='section-heading'>Featured Projects</h2>

			<div className='space-y-8 lg:flex md:space-y-0 md:gap-6'>
				{featuredProjects.map(
					({
						id,
						image,
						name,
						description,
						liveURL,
						githubURL,
						techStacks,
					}) => (
						<article key={id}>
							<figure className='bg-card p-4 sm:p-6 rounded-md space-y-6 border-2 border-accent-dark/10'>
								<Image
									src={image}
									alt={`${name} screenshot`}
									loading='lazy'
									className='rounded-md'
								/>

								<figcaption>
									<h3 className='text-lg uppercase tracking-wider font-medium font-grotesk'>
										{name}
									</h3>

									<p className='my-2 text-white/55 sm:tracking-wide text-pretty'>
										{description}
									</p>

									<div className='flex gap-6 items-center mt-4 mb-12'>
										<a
											target='_blank'
											href={liveURL}
											rel='noopener noreferrer'
											className='fp-links gap-0.5 group'
										>
											Live Demo
											<LuArrowUpRight
												size={24}
												className='group-hover:animate-pulse'
											/>
										</a>

										<a
											target='_blank'
											href={githubURL}
											rel='noopener noreferrer'
											className='fp-links gap-2 group'
										>
											GitHub
											<SiGithub
												size={18}
												className='group-hover:animate-pulse'
											/>
										</a>
									</div>

									<div
										aria-label='Technologies used'
										className='flex items-center gap-2 flex-wrap'
									>
										<span className='sr-only'>Tech stacks</span>

										<ul className='flex flex-wrap gap-2 w-full'>
											{techStacks.map((tech) => (
												<li
													key={tech}
													className='inline border-2 border-accent/35 cursor-default px-3 py-1 rounded-full text-sm tracking-wide hover:border-accent-hover hover:bg-accent/10 text-white/70 transition-colors duration-150 ease-linear'
												>
													{tech}
												</li>
											))}
										</ul>
									</div>
								</figcaption>
							</figure>
						</article>
					)
				)}
			</div>

			<Link
				href='/projects'
				className='block mt-15 hover:bg-accent/10 py-1.5 sm:py-3 px-12 text-center border-accent border rounded-sm sm:w-fit mx-auto text-base sm:text-lg font-medium transition-colors duration-150 ease-linear'
			>
				View all projects
			</Link>
		</section>
	);
};
export default FeaturedProjects;
