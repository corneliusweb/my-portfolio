import { LuDownload } from 'react-icons/lu';
import ContactForm from '../ContactForm';
import SocialLinks from '../SocialLinks';

const ContactSection = ({ intro }: { intro?: string }) => {
	return (
		<section className='tracking-wide leading-7 lg:flex lg:gap-12 lg:items-center'>
			<div className='mb-15 lg:flex-1 lg:mb-0'>
				<h2 className='section-heading'>Let's Connect</h2>

				{intro && <p className='mb-3'>{intro}</p>}

				<p>
					Say hello at{' '}
					<a
						href='mailto:cornelius.webdev@gmail.com'
						className='text-accent'
					>
						cornelius.webdev@gmail.com
					</a>
				</p>

				<p>
					For more information,
					<a
						href='/documents/my-resume.pdf'
						download='Resume - Cornelius Asogwa'
						className='text-accent'
					>
						{' '}
						download my resume here
						<LuDownload className='ml-1 inline-flex' />
					</a>
				</p>

				<SocialLinks
					IconClass='text-2xl text-accent hover:text-accent-hover'
					ULClass='flex gap-7 my-5'
					size={28}
				/>

				<p>
					I read every message and truly appreciate people reaching out.
					Let's build something great together!
				</p>
			</div>

			<div className='flex-1'>
				<ContactForm />
			</div>
		</section>
	);
};
export default ContactSection;
