import { socials } from "@/app/data/social-links";
import type { SocialLinkProps } from "@/app/types";

const SocialLinks = ({ show, LinkClass, IconClass, size }: SocialLinkProps) => {
	const visible = show ? socials.filter((s) => show.includes(s.id)) : socials;
	return (
		<>
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
						<a
							href={href}
							className={LinkClass}
							target={target && target}
							rel={rel}
							title={title}
							aria-label={ariaLabel}
						>
							<span className='sr-only'>{name}</span>{' '}
							{/* link text for screen readers */}
							<Icon className={IconClass} size={size} />
						</a>
					</li>
				)
			)}
		</>
	);
};
export default SocialLinks;
