import { projectsMetadata } from "@/lib/metadata";

export const metadata = projectsMetadata;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
