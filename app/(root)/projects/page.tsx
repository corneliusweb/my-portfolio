'use client';

import { projects } from '@/app/data/projects';
import { ProjectCard } from '@/components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
			<section className='leading-7 mb-10'>
				<h1 className='section-heading'>Projects</h1>

				<p className='text-page-txt'>{projectDescription[category]}</p>
			</section>

			<section className='mx-auto'>
				<div>
					<h3 className='mb-6 font-bold tracking-wide'>
						Filter projects by category
					</h3>

					<ul className='flex gap-2.5 items-center flex-wrap space-y-2 sm:space-y-0'>
						{categories.map((cat) => (
							<li
								key={cat}
								className={`rounded-md transition-all duration-200 ${cat === category ? 'border-2 border-accent/50 bg-accent/12' : 'border-2 border-accent/15 hover:bg-accent/12 hover:border-accent/50'}`}
							>
								<button
									type='button'
									onClick={() => setCategory(cat)}
									className='px-4 py-2 text-sm tracking-wide'
								>
									{cat}
								</button>
							</li>
						))}
					</ul>
				</div>

				<AnimatePresence mode='wait'>
					<div className='space-y-15 mt-15'>
						{filteredProjects.length === 0 && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.5 }}
							>
								<p className='text-center mt-60 font-semibold tracking-wide'>
									No project for this category yet!
								</p>
							</motion.div>
						)}

						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.5 }}
							>
								<ProjectCard {...project} />
							</motion.div>
						))}
					</div>
				</AnimatePresence>
			</section>
		</div>
	);
};
export default Projects;
