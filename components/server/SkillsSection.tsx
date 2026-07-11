import { skills } from "@/app/data/skills";
import type { Skill } from "@/app/types";

const Skills = () => {
	const getSkillsByCategory = (categories: string[]): Skill[] => {
		return skills.filter((skill) => categories.includes(skill.category));
	};

	const skillCategories = [
		{ title: "Core", categories: ["Core"] },
		{ title: "Libraries & Frameworks", categories: ["Library", "Framework"] },
		{ title: "Tools", categories: ["Tool"] },
	];

	return (
		<section className="xl:flex xl:items-center">
			<div className="flex-1">
				<h2 className="section-heading">Skills & Tools</h2>

				<p>
					Here are the technologies I use to design, build, and ship
					projects efficiently.
					{/* Reminder to add: ... but I am always ready to learn new stacks  */}
				</p>
			</div>

			<div className="sm:flex flex-1 max-w-icon-container mx-auto mt-12">
				{skillCategories.map(({ title, categories }) => (
					<div key={title} className="not-last-of-type:mb-4 sm:mb-0">
						{/* <h3 className='text-accent-dark mb-2'>{title}</h3> */}
						<ul className="flex flex-wrap space-y-2 justify-center space-x-4 lg:space-x-6 md:space-y-5">
							{getSkillsByCategory(categories).map(
								({ icon: Icon, id, name }) => {
									return (
										<li key={id} className="skills-list">
											{Icon && (
												<Icon size={54} className="skills-icon" />
											)}
											<span>{name}</span>
										</li>
									);
								},
							)}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
export default Skills;
