import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';

const About = () => {
	return (
		<div className='lg:space-y-10 lg:px-18 xl:px-50'>
			<section className='lg-section-wrapper'>
				<h1 className='section-subheading  lg:w-65'>My Journey</h1>

				<div className='flex-1'>
					<p className='leading-7 tracking-wide'>
						My journey into web development began with a curiosity about
						how <em>“The Web”</em> works. As I explored deeper, I didn't
						just find answers; I fell in love with the craft itself. What
						started as casual exploration quickly grew into a passion,
						then commitment to mastering the tools and principles that
						power modern web experiences.
					</p>

					<p className='leading-7 tracking-wide mt-4'>
						Today, I specialize in building full-stack web applications
						using
						<strong> Next.js</strong>, <strong>React</strong>,{' '}
						<strong>TypeScript</strong>, and <strong>Firebase</strong>.
						I'm passionate about writing clean, maintainable code and
						creating interfaces that are both visually engaging and highly
						performant. Every project I build is an opportunity to solve
						real problems and deliver meaningful value to users.
					</p>
				</div>
			</section>

			<hr className='text-accent/12' />

			<section className='lg-section-wrapper'>
				<h2 className='section-subheading lg:w-65'>My Approach</h2>

				<div className=' flex-1'>
					<p className='leading-7 tracking-wide mt-2'>
						I believe great web development isn't just about making things
						work; it's about making them work <strong>well</strong>. My
						approach focuses on:
					</p>

					<ul className='list-disc pl-6 mt-3 space-y-1.5 marker:text-accent-dark marker:text-lg lg:-ml-2'>
						<li>
							<strong>Performance:</strong> Building applications that
							load fast and run smoothly.
						</li>
						<li>
							<strong>Accessibility:</strong> Ensuring everyone can use
							what I create, regardless of ability.
						</li>
						<li>
							<strong>Minimalism:</strong> Building websites with{' '}
							<em>
								<strong>only what's essential</strong>
							</em>
							, resulting in simple, fast, and reliable performance.
						</li>
						<li>
							<strong>User Experience:</strong> Designing intuitive
							interfaces that feel natural to use.
						</li>
						<li>
							<strong>Clean Code:</strong> Writing maintainable code
							that's easy to read, scale, and collaborate on.
						</li>
					</ul>
				</div>
			</section>

			<hr className='text-accent/12' />

			<section className='lg-section-wrapper'>
				<h2 className='section-subheading lg:w-65'>Beyond Code</h2>

				<p className='leading-7 tracking-wide mt-2 flex-1'>
					When I'm not coding, I'm learning; exploring new frameworks,
					diving into design principles, and understanding user behavior.
					I'm also fascinated by the world of <strong>bees 🐝</strong>,
					which constantly reminds me how small details and teamwork can
					create something truly powerful. This curiosity keeps my
					creativity alive and fuels my approach to problem-solving.
				</p>
			</section>

			<hr className='text-accent/12' />

			<section className='lg-section-wrapper'>
				<h2 className='section-subheading lg:w-65'>
					Let's Build Something Together
				</h2>

				<p className='leading-7 tracking-wide mt-2 flex-1'>
					I'm open to opportunities where I can collaborate with talented
					teams, grow as a developer, and build products that make a
					difference. If you're looking for someone who combines technical
					expertise with genuine love for the web;
					<Link
						href='/contact'
						className='text-lg text-accent hover:text-accent-dark font-semibold inline-flex items-center ml-1'
					>
						let's connect
						<LuArrowUpRight />
					</Link>
				</p>
			</section>
		</div>
	);
};
export default About;
