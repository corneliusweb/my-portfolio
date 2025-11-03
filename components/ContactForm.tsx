'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import type { ContactFormData } from '@/app/types';
import { sendContactEmail } from '@/app/actions/contact';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	// send form data
	const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('subject', data.subject);
		formData.append('message', data.message);

		const result = await sendContactEmail(formData);

		if (result.success) reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
			<div className='relative'>
				<input
					{...register('name', { required: 'name is required' })}
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
					})}
					rows={6}
					placeholder='Enter your message'
					className='peer text-pretty resize-none contact-input'
				></textarea>
				<label className='contact-label'>Enter your message</label>
			</div>
			<button
				type='submit'
				className='bg-accent text-card tracking-wider py-3 px-12 rounded-md font-semibold hover:bg-accent-hover'
			>
				Submit
			</button>
		</form>
	);
};
export default ContactForm;
