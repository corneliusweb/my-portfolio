import { SiFacebook, SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { TfiEmail } from 'react-icons/tfi';
import type { SocialLink } from '../types';

export const socials: SocialLink[] = [
	{
		id: 'email',
		name: 'Email',
		href: 'mailto:jammybillz@gmail.com',
		rel: 'noopener noreferrer',
		title: "Cornelius Asogwa's Email address",
		'aria-label': 'Email',
		icon: TfiEmail,
	},
	{
		id: 'x',
		name: 'X (formerly Twitter)',
		href: 'https://x.com/corneliusweb_',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: "Cornelius Asogwa's X profile",
		'aria-label': 'X (formerly Twitter)',
		icon: SiX,
	},
	{
		id: 'github',
		name: 'GitHub',
		href: 'https://github.com/corneliusweb',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: "Cornelius Asogwa's GitHub profile",
		'aria-label': 'GitHub',
		icon: SiGithub,
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/corneliusweb/',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: "Cornelius Asogwa's LinkedIn profile",
		'aria-label': 'LinkedIn',
		icon: SiLinkedin,
	},
	{
		id: 'facebook',
		name: 'Facebook',
		href: 'https://facebook.com/Cornelius.C.Asogwa/',
		target: '_blank',
		rel: 'noopener noreferrer',
		title: "Cornelius Asogwa's Facebook profile",
		'aria-label': 'Facebook',
		icon: SiFacebook,
	},
];
