import {
	AboutSection,
	ContactSection,
	FeaturedProjectsSection,
	HeroSection,
	SkillsSection,
} from '@/components';

const Home = () => {
	return (
		<main className='grid gap-20'>
			<HeroSection />
			<SkillsSection />
			<FeaturedProjectsSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
};

export default Home;
