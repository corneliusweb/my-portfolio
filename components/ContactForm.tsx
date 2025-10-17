import { SubmitHandler, useForm } from 'react-hook-form';
import type { ContactFormData } from '@/app/types';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>();

	// send form data
	const onSubmit: SubmitHandler<ContactFormData> = (data) => {
		console.log('data submitted ', data);
	};

	return (
		<form onSubmit={() => handleSubmit(onSubmit)}>
			<div>
				<input
					{...register('name', {
						required: 'name is required',
					})}
					placeholder='Enter your name'
				/>
				<label>Name</label>
			</div>

			<div>
				<input
					{...register('email', {
						required: 'email is required',
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Invalid email address',
						},
					})}
					placeholder='Enter your email'
				/>
				<label>Email</label>
			</div>

			<div>
				<input
					{...register('subject', {
						required: 'subject is required',
					})}
				/>
				<label>Subject</label>
			</div>

			<div>
				<textarea
					{...register('message', {
						required: 'message is required',
						minLength: 5,
					})}
				></textarea>
				<label>Message</label>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
};
export default ContactForm;
