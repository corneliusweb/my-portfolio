import { ContactSection } from '@/components';

const Contact = () => {
	const introText =
		"Whether you want to discuss a new project, ask a question, or just say hi; I'd love to hear from you. I'm always open to exciting collaborations and learning opportunities.";
	return (
		<div>
			<ContactSection intro={introText} />
		</div>
	);
};
export default Contact;
