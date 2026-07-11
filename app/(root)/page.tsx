import {
	AboutSection,
	ContactSection,
	FeaturedProjectsSection,
	HeroSection,
	SkillsSection,
} from "@/components/server";

const Home = () => {
	return (
		<>
			<HeroSection />
			<hr className="text-accent/15" />
			<SkillsSection />
			<hr className="text-accent/15" />
			<FeaturedProjectsSection />
			<hr className="text-accent/15" />
			<AboutSection />
			<hr className="text-accent/15" />
			<ContactSection />
		</>
	);
};

export default Home;
