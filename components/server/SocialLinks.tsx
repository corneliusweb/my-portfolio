import { socials } from '@/app/data/social-links';
import type { SocialLinkProps } from '@/app/types';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';

const SocialLinks = ({
	show,
	LinkClass,
	IconClass,
	ULClass,
	size,
}: SocialLinkProps) => {
	const visible = show ? socials.filter((s) => show.includes(s.id)) : socials;
	return (
		<ul className={ULClass}>
			{visible.map(
				({
					id,
					name,
					href,
					title,
					target,
					rel,
					['aria-label']: ariaLabel,
					icon: Icon,
				}) => (
					<li key={id}>
						<HoverCard>
							<HoverCardTrigger
								href={href}
								className={LinkClass}
								rel={rel}
								aria-label={ariaLabel}
							>
								<span className='sr-only'>{name}</span>{' '}
								{/* link text for screen readers */}
								<Icon className={IconClass} size={size} />
							</HoverCardTrigger>
							<HoverCardContent>{title}</HoverCardContent>
						</HoverCard>
					</li>
				)
			)}
		</ul>
	);
};
export default SocialLinks;
