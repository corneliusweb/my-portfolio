import {
	AboutSection,
	ContactSection,
	FeaturedProjectsSection,
	HeroSection,
	SkillsSection,
} from '@/components';

const Home = () => {
	return (
		<>
			<HeroSection />
			<SkillsSection />
			<FeaturedProjectsSection />
			<AboutSection />
			<ContactSection />
		</>
	);
};

export default Home;
