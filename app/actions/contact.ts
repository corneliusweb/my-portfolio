'use server';

import { Resend } from 'resend';
import { ContactFormResponse } from '../types';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
	formData: FormData
): Promise<ContactFormResponse> => {
	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const subject = formData.get('subject') as string;
	const message = formData.get('message') as string;

	if (!name || !email || !message) {
		return { success: false, error: 'Please fill all fields!' };
	}

	try {
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'cornelius.webdev@gmail.com',
			subject: `Portfolio Contact from ${name}`,
			react: EmailTemplate({ name, email, subject, message }),
		});

		return { success: true };
	} catch (error) {
		return { success: false, error: 'Failed to send email' };
	}
};
