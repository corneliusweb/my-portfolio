import ContactForm from '../ContactForm';
import SocialLinks from '../SocialLinks';

const Contact = () => {
	return (
		<section>
			<div>
				<h2>Let's Connect</h2>
				<p>
					Say hello at{' '}
					<a href='mailto:cornelius.webdev@gmail.com'>
						cornelius.webdev@gmail.com
					</a>
				</p>
				<p>
					For more information, here's my{' '}
					<a
						href='src/assets/my-resume.pdf'
						download='Resume - Cornelius Asogwa'
					>
						resume
					</a>
				</p>
				<ul className='flex gap-5'>
					<SocialLinks IconClass='text-2xl' />
				</ul>
			</div>
			<ContactForm />
		</section>
	);
};
export default Contact;
