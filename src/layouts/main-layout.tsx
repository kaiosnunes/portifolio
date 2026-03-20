import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
