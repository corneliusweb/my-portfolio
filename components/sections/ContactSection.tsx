import ContactForm from '../ContactForm';
import SocialLinks from '../SocialLinks';

const ContactSection = () => {
	return (
		<section className='px-6 mb-12'>
			<div className='space-y-1'>
				<h2 className='mb-8 text-3xl font-bold uppercase'>Let's Connect</h2>
				<p>
					Say hello at{' '}
					<a
						href='mailto:jammybillz@gmail.com'
						className='underline underline-offset-5 decoration-accent hover:no-underline hover:text-accent'
					>
						jammybillz@gmail.com
					</a>
				</p>
				<p>
					For more information, here's my{' '}
					<a
						href='/documents/my-resume.pdf'
						download='Resume - Cornelius Asogwa'
						className='underline underline-offset-5 decoration-accent hover:no-underline hover:text-accent'
					>
						resume
					</a>
				</p>

				<SocialLinks
					IconClass='text-2xl text-accent hover:text-accent-hover'
					ULClass='flex gap-10 mt-14 mb-18'
					size={30}
				/>
			</div>
			<ContactForm />
		</section>
	);
};
export default ContactSection;
