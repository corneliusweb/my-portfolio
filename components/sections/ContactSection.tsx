import { LuDownload } from 'react-icons/lu';
import ContactForm from '../ContactForm';
import SocialLinks from '../SocialLinks';

const ContactSection = ({ intro }: { intro?: string }) => {
	return (
		<section className='tracking-wide leading-7'>
			<div className='mb-15'>
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

				<p className='flex gap-1'>
					For more information,
					<a
						href='/documents/my-resume.pdf'
						download='Resume - Cornelius Asogwa'
						className='flex items-center gap-1.5 text-accent'
					>
						download my resume here
						<LuDownload />
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

			<ContactForm />
		</section>
	);
};
export default ContactSection;
