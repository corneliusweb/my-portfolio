'use client';

import { projects } from '@/app/data/projects';
import { ProjectCard } from '@/components';
import { useState } from 'react';

const Projects = () => {
	const categories: string[] = [
		'All',
		'Design',
		'Development',
		'Client Work',
		'Experiments',
	];

	const projectDescription: Record<string, string> = {
		All: 'A collection of projects that highlight my experience building responsive, accessible, and scalable web applications using Next.js, React, TypeScript and Firebase.',
		Design:
			'Interfaces focused on visual design, motion, and front-end creativity.',
		Development:
			'Projects showcasing front-end and full-stack problem solving, functionality, and code structure',
		'Client Work':
			'Live projects built for real clients, focusing on delivering practical solutions and performance.',
		Experiments:
			'Fun experiments where I play with new tools, libraries, or design ideas.',
	};

	const [category, setCategory] = useState<string>('All');

	const filteredProjects =
		category === 'All' ? projects : (
			projects.filter((p) => p.category === category)
		);

	return (
		<div className='max-w-7xl xl:min-w-6xl mx-auto'>
			<section className='leading-7'>
				<h1 className='section-heading'>Projects</h1>

				<p className='text-page-txt md:w-para-length'>
					{projectDescription[category]}
				</p>
			</section>

			<section className='mx-auto'>
				<div>
					<p className='mb-5'>Filter projects by category</p>

					<ul className='flex gap-2 items-center flex-wrap space-y-2 sm:space-y-0'>
						{categories.map((cat) => (
							<li
								key={cat}
								className={`rounded-full transition-all duration-200 ${cat === category ? 'border-1 border-accent bg-accent/12' : ' border-1 border-accent/40 hover:bg-accent/12 hover:border-accent'}`}
							>
								<button
									type='button'
									onClick={() => setCategory(cat)}
									className='px-6 py-2'
								>
									{cat}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='space-y-15 mt-15'>
					{filteredProjects.map((project) =>
						project !== undefined ?
							<ProjectCard key={project.id} {...project} />
						:	<p>No project for this category yet</p>
					)}
				</div>
			</section>
		</div>
	);
};
export default Projects;
