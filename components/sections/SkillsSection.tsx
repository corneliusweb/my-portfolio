import { skills } from '@/app/data/skills';
import type { Skill } from '@/app/types';

const Skills = () => {
	const getSkillsByCategory = (categories: string[]): Skill[] => {
		return skills.filter((skill) => categories.includes(skill.category));
	};

	const skillCategories = [
		{ title: 'Core', categories: ['Core'] },
		{ title: 'Libraries & Frameworks', categories: ['Library', 'Framework'] },
		{ title: 'Tools', categories: ['Tool'] },
	];

	return (
		<section>
			<h2 className='section-heading'>Skills & Tools</h2>

			<p>
				Here are the technologies I use to design, build, and ship projects
				efficiently.
				{/* Reminder to add: ... but I am always ready to learn new stacks  */}
			</p>

			<div className='sm:flex  max-w-icon-container mx-auto my-8'>
				{skillCategories.map(({ title, categories }) => (
					<div key={title} className='not-last-of-type:mb-4 sm:mb-0'>
						{/* <h3 className='text-accent-dark mb-2'>{title}</h3> */}
						<ul className='flex flex-wrap justify-center space-x-4 lg:space-x-6 md:space-y-5'>
							{getSkillsByCategory(categories).map(
								({ icon: Icon, id, name }) => {
									return (
										<li key={id} className='skills-list'>
											{Icon && (
												<Icon size={54} className='skills-icon' />
											)}
											<span>{name}</span>
										</li>
									);
								}
							)}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};
export default Skills;
