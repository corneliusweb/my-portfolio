'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import type { ContactFormData, ContactFormResponse } from '@/app/types';
import { sendContactEmail } from '@/app/actions/contact';
import { toast } from 'react-toastify';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormData>();

	// send form data
	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('subject', data.subject);
		formData.append('message', data.message);

		const result: ContactFormResponse = await sendContactEmail(formData);

		if (result.success) {
			reset();
			toast.success(
				"Message sent successfully! I'll be in touch as soon as possible"
			);
		} else {
			toast.error('⚠️ Something went wrong. Please try again.');
		}
	};

	// prohibited contact names
	const bannedNames = ['johndoe', 'janedoe', 'test', 'unknown', 'admin'];

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className={`space-y-8 mb-8 ${
					isSubmitting
						? 'opacity-70 pointer-events-none'
						: 'opacity-100 pointer-events-auto'
				}`}
			>
				<div className='relative'>
					<input
						{...register('name', {
							required: 'name is required',
							setValueAs: (value) => value.trim(),
							validate: (value) => {
								if (
									bannedNames.includes(
										value.trim().toLowerCase().replace(/\s+/g, '')
									)
								) {
									return 'Please use a real name!';
								}
								return true;
							},
						})}
						id='name'
						type='text'
						placeholder='Enter your name'
						className='peer contact-input'
					/>

					<label htmlFor='name' className='contact-label'>
						Enter your name
					</label>
				</div>

				<div className='relative'>
					<input
						{...register('email', {
							required: 'email is required',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Invalid email address',
							},
							setValueAs: (value) => value.trim(),
							validate: (value) => {
								if (value.includes('test')) {
									return 'Please use a real email!';
								}
								return true;
							},
						})}
						placeholder='Enter your email'
						className='peer contact-input'
					/>
					<label className='contact-label'>Enter your email</label>
				</div>

				<div className='relative'>
					<input
						{...register('subject', {
							required: 'subject is required',
							setValueAs: (value) => value.trim(),
						})}
						placeholder='Enter subject'
						className='peer contact-input'
					/>
					<label className='contact-label'>Enter subject</label>
				</div>

				<div className='relative'>
					<textarea
						{...register('message', {
							required: 'message is required',
							minLength: 5,
							setValueAs: (value) => value.trim(),
						})}
						rows={6}
						placeholder='Enter your message'
						className='peer text-pretty resize-none contact-input'
					></textarea>
					<label className='contact-label'>Enter your message</label>
				</div>
			</div>
			<button
				type='submit'
				disabled={isSubmitting}
				className={`bg-accent text-card tracking-wider py-3 px-5 rounded-md font-semibold hover:bg-accent-hover ${
					isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
				}`}
			>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	);
};
export default ContactForm;
