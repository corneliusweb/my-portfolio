import { socials } from '@/app/data/social-links';
import type { SocialLinkProps } from '@/app/types';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

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
						<Tooltip>
							<TooltipTrigger>
								<a
									href={href}
									target={target}
									rel={rel}
									className={LinkClass}
									aria-label={ariaLabel}
								>
									<span className='sr-only'>{name}</span>{' '}
									{/* link text for screen readers */}
									<Icon className={IconClass} size={size} />
								</a>
							</TooltipTrigger>
							<TooltipContent>
								<p>{title}</p>
							</TooltipContent>
						</Tooltip>
					</li>
				)
			)}
		</ul>
	);
};
export default SocialLinks;
