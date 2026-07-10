import { ContactFormData } from '@/app/types';
import { Html, Body, Container, Text, Heading } from 'react-email';

const EmailTemplate = ({ name, subject, email, message }: ContactFormData) => {
	return (
		<Html>
			<Body
				style={{ backgroundColor: '#fff', fontFamily: 'Arial, sans-serif' }}
			>
				<Container style={{ padding: '10px' }}>
					<Heading style={{ color: '#0070f3', fontSize: '18px' }}>
						New Message from{' '}
						<span style={{ color: '#ffb86b', fontSize: '18px' }}>
							{name}
						</span>
					</Heading>
					<Text>
						<strong>Email:</strong> {email}
					</Text>
					<Text>
						<strong>Message:</strong>
					</Text>
					<Text>{message}</Text>
				</Container>
			</Body>
		</Html>
	);
};
export default EmailTemplate;
