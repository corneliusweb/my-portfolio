import Link from "next/link";

const Header = () => {
  return (
		<header>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/projects'>Projects</Link>
			<Link href='/contact'>Contact</Link>
		</header>
  );
}
export default Header