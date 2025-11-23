import { ContactSection } from '@/components/server';
import { contactMetadata } from '@/lib/metadata';

export const metadata = contactMetadata;

const Contact = () => {
	const introText =
		"Whether you want to discuss a new project, ask a question, or just say hi; I'd love to hear from you. I'm always open to exciting collaborations and learning opportunities.";

	return (
		<div className='lg:h-[calc(100vh-168px)] lg:grid'>
			<ContactSection intro={introText} />
		</div>
	);
};
export default Contact;
