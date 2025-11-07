import { LuDownload } from 'react-icons/lu';
import ContactForm from '../ContactForm';
import SocialLinks from '../SocialLinks';

const ContactSection = () => {
	return (
		<section>
			<div>
				<h2 className='section-heading'>Let's Connect</h2>

				<p>
					Say hello at{' '}
					<a href='mailto:jammybillz@gmail.com' className='text-accent'>
						jammybillz@gmail.com
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
					ULClass='flex gap-7 mt-14 mb-18'
					size={28}
				/>
			</div>

			<ContactForm />
		</section>
	);
};
export default ContactSection;
