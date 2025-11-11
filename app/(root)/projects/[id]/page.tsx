import { projects } from '@/app/data/projects';

const Projects = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;

	const project = projects.find((p) => p.id === id);

	if (!project) return <p>Project not found</p>;

	return (
		<>
			<p>the current id is {id} </p>
			<h2> {project.name} </h2>
		</>
	);
};
export default Projects;
