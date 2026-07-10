import type { Skill } from '../types';
import TanstackIcon from '@/icons/TanstackIcon';
import UnheadIcon from '@/icons/UnheadIcon';
import {
	SiReact,
	SiHtml5,
	SiCss,
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiGithub,
	SiVite,
	SiGit,
	SiZod,
	SiFigma,
	SiRedux,
	SiNextdotjs,
	SiAxios,
	SiShadcnui,
	SiSupabase,
	SiPrisma,
	SiPostgresql
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiFirebase } from 'react-icons/di';

export const skills: Skill[] = [
	{ id: 'html', name: 'HTML5', category: 'Core', icon: SiHtml5 },
	{ id: 'css', name: 'CSS3', category: 'Core', icon: SiCss },
	{
		id: 'javaScript',
		name: 'JavaScript',
		category: 'Core',
		icon: SiJavascript,
	},
	{
		id: 'typescript',
		name: 'TypeScript',
		category: 'Core',
		icon: SiTypescript,
	},

	{ id: 'react', name: 'React', category: 'Library', icon: SiReact },
	{ id: 'nextdotjs', name: 'Next.js', category: 'Library', icon: SiNextdotjs },
	{
		id: 'tanstack',
		name: 'TanStack',
		category: 'Library',
		icon: TanstackIcon,
	},
	{ id: 'unhead', name: 'UnHead', category: 'Library', icon: UnheadIcon },
	{ id: 'zod', name: 'Zod', category: 'Library', icon: SiZod },
	{ id: 'redux', name: 'Redux', category: 'Library', icon: SiRedux },
	{ id: 'axios', name: 'Axios', category: 'Library', icon: SiAxios },
	{ id: 'shadcnui', name: 'Shadcnui', category: 'Library', icon: SiShadcnui },
	{
		id: 'tailwind',
		name: 'Tailwind CSS',
		category: 'Framework',
		icon: SiTailwindcss,
	},
	{ id: 'firebase', name: 'Firebase', category: 'Library', icon: DiFirebase },
	{ id: 'supabase', name: 'Supabase', category: 'Library', icon: SiSupabase },
	{ id: 'prisma', name: 'Prisma', category: 'Library', icon: SiPrisma },
	{ id: 'postgresql', name: 'Postgresql', category: 'Library', icon: SiPostgresql },

	{ id: 'vite', name: 'Vite', category: 'Tool', icon: SiVite },
	{ id: 'git', name: 'Git', category: 'Tool', icon: SiGit },
	{ id: 'github', name: 'Github', category: 'Tool', icon: SiGithub },
	{ id: 'figma', name: 'Figma', category: 'Tool', icon: SiFigma },
	{ id: 'vscode', name: 'VSCode', category: 'Tool', icon: VscVscode },
];
