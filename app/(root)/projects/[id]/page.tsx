const Projects = async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	return (
		<>
			<p>the current id is {id} </p>
		</>
	);
};
export default Projects;
