import { Contrast } from "lucide-react";
import { useState } from "react";

export function ThemeSwitcher() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
			aria-label="Toggle theme"
		>
			<Contrast size={16} />
		</button>
	);
}
