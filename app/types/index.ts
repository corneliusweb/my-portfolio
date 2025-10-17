import { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';

export interface Project {
	id: string;
	name: string;
	image: StaticImageData;
	description: string;
	techStacks: string[];
	challenge?: string[];
	addedFeatures?: string[];
	solution?: string;
	liveURL?: string;
	githubURL?: string;
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

export type CustomIconProps = React.SVGProps<SVGSVGElement> & { size?: number };
