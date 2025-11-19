import { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';

export interface Project {
	id: string;
	category: string;
	name: string;
	image: StaticImageData;
	description: string;
	techStacks: string[];
	challenges?: string[];
	addedFeatures?: string[];
	solution?: string;
	liveURL: string;
	githubURL: string;
	date?: string;
	role?: string;
}

export interface Skill {
	id: string;
	name: string;
	category: 'Core' | 'Framework' | 'Tool' | 'Library';
	icon?: IconType | React.FC<CustomIconProps>;
}

export interface SocialLink {
	id: string;
	name: string;
	href: string;
	rel: string;
	target?: string;
	title: string;
	'aria-label': string;
	icon: IconType;
}

export interface SocialLinkProps {
	show?: string[];
	LinkClass?: string;
	IconClass?: string;
	ULClass?: string;
	size?: number;
}

export type CustomIconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface ContactFormResponse {
	success: boolean;
	error?: string;
}
