import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../theme-switcher";
import { NavbarItem } from "./data";

export function Navbar() {
	const [active, setActive] = useState<string>("#home");
	const [scrolled, setScrolled] = useState<boolean>(false);

	const { t, i18n } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			for (const item of NavbarItem) {
				const el = document.querySelector(item.link);
				if (!el) continue;
				const { top, bottom } = el.getBoundingClientRect();
				if (top <= 80 && bottom >= 80) {
					setActive(item.link);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = (link: string) => {
		setActive(link);
		document.querySelector(link)?.scrollIntoView();
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled && "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm"
			} border-b border-zinc-200 dark:border-zinc-800`}
		>
			<nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
				<span className="text-zinc-900 dark:text-white font-bold text-lg">
					Kaio<span className="text-indigo-500 dark:text-indigo-400">.</span>
					Nunes
				</span>

				<ul className="flex items-center gap-1">
					{NavbarItem.map(({ key, link }) => (
						<li key={link}>
							<button
								type="button"
								onClick={() => handleClick(link)}
								className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 cursor-pointer ${
									active === link
										? "text-white bg-indigo-500/20 ring-1 ring-indigo-500/40"
										: "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
								}`}
							>
								{t(key)}
							</button>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-1">
					<ThemeSwitcher />
					<select
						value={i18n.language}
						onChange={(e) => i18n.changeLanguage(e.target.value)}
						className="px-3 py-1.5 text-sm rounded-full bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer border-none outline-none appearance-none"
					>
						<option value="en">EN</option>
						<option value="pt">PT</option>
					</select>
				</div>
			</nav>
		</header>
	);
}
