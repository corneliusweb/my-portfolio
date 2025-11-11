import { projects } from '@/app/data/projects';
import { ProjectCard } from '@/components';

const Projects = () => {
	return (
		<>
			<section className='leading-7'>
				<h1 className='section-heading'>Projects</h1>
				<p className='text-page-txt w-para-length'>
					A collection of projects that highlight my experience building
					responsive, accessible, and scalable web applications using
					Next.js, React, TypeScript and Firebase.
				</p>
			</section>

			<section className='space-y-25 mx-auto'>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</section>
		</>
	);
};
export default Projects;
