import { featuredProjects } from "@/app/data/featured-projects";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

const FeaturedProjects = () => {
	return (
		<section>
			<h2 className="section-heading">Featured Projects</h2>

			<div className="space-y-8 lg:flex lg:gap-12 lg:space-y-0">
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
						<article
							key={id}
							className="bg-card p-4 rounded-md space-y-6 border-2 border-accent-dark/15 flex-1 sm:p-8 lg:p-6"
						>
							<figure>
								<Image
									src={image}
									alt={`${name} screenshot`}
									loading="lazy"
									className="rounded-md "
								/>

								<figcaption>
									<h3 className="mt-6 text-lg uppercase tracking-wider font-medium font-grotesk">
										{name}
									</h3>
								</figcaption>
							</figure>

							<p className="text-white/55 sm:tracking-wide text-pretty">
								{description}
							</p>

							<div className="flex justify-between gap-6 items-center mb-12 lg:justify-start max-w-lg mx-auto lg:mx-0">
								<a
									target="_blank"
									href={liveURL}
									rel="noopener noreferrer"
									className="x-link group"
								>
									View Live
									<LuArrowUpRight
										size={24}
										className="group-hover:animate-pulse"
									/>
								</a>

								<a
									target="_blank"
									href={githubURL}
									rel="noopener noreferrer"
									className="x-link gap-1 group"
								>
									View Code
									<LuGithub
										size={18}
										className="group-hover:animate-pulse"
									/>
								</a>
							</div>

							<div
								aria-label="Technologies used"
								className="flex items-center gap-2 flex-wrap"
							>
								<span className="sr-only">Tech stacks</span>

								<ul className="flex flex-wrap justify-center gap-3 w-full sm:justify-start mx-auto max-w-lg lg:mx-0">
									{techStacks.map((tech) => (
										<li
											key={tech}
											className="inline border-2 border-accent/35 cursor-default px-3 py-1 rounded-full text-xs tracking-wide hover:border-accent-hover/50 hover:bg-accent/10 text-white/70 transition-colors duration-150 ease-linear"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</article>
					),
				)}
			</div>

			<Link
				href="/projects"
				className="block mt-15 hover:bg-accent/10 py-3 px-12 text-center border-accent border rounded-sm sm:w-fit mx-auto text-base sm:text-lg font-medium transition-colors duration-150 ease-linear"
			>
				View all projects
			</Link>
		</section>
	);
};
export default FeaturedProjects;
