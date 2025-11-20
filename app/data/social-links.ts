import { SiFacebook, SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { TfiEmail } from 'react-icons/tfi';
import type { SocialLink } from '../types';

export const socials: SocialLink[] = [
	{
		id: 'email',
		name: 'Email',
		href: 'mailto:jammybillz@gmail.com',
		rel: 'noopener noreferrer',
		title: 'Email Cornelius',
		'aria-label': 'Email',
		icon: TfiEmail,
	},
	{
		id: 'x',
		name: 'X (formerly Twitter)',
		href: 'https://x.com/corneliusweb_',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: 'Visit my X profile',
		'aria-label': 'X (formerly Twitter)',
		icon: SiX,
	},
	{
		id: 'github',
		name: 'GitHub',
		href: 'https://github.com/corneliusweb',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: 'Check my GitHub',
		'aria-label': 'GitHub',
		icon: SiGithub,
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/corneliusweb',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: 'Connect on LinkedIn',
		'aria-label': 'LinkedIn',
		icon: SiLinkedin,
	},
	{
		id: 'facebook',
		name: 'Facebook',
		href: 'https://facebook.com/asogwa.c.cornelius',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: 'Add me on Facebook',
		'aria-label': 'Facebook',
		icon: SiFacebook,
	},
];
