import { useTranslation } from "react-i18next";

export function Home() {
	const { t } = useTranslation();

	return (
		<section id="home" className="min-h-screen py-24 px-6">
			<div className="max-w-5xl mx-auto h-full min-h-[calc(100vh-6rem)] flex items-center gap-16">
				<div className="flex flex-col gap-4 flex-1">
					<span className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
						{t("home.greeting")}
					</span>
					<h1 className="text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
						Kaio Santos
						<br />
						Nunes
					</h1>
					<p className="text-lg text-zinc-500 dark:text-zinc-400">
						{t("home.role")}
					</p>
					<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
						{t("home.description")}
					</p>

					<div className="flex items-center gap-3 mt-4">
						<button
							type="button"
							onClick={() =>
								document.querySelector("#contact")?.scrollIntoView()
							}
							className="px-6 py-2.5 rounded-full text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200"
						>
							{t("home.cta")}
						</button>
						<button
							type="button"
							onClick={() =>
								document.querySelector("#projects")?.scrollIntoView()
							}
							className="px-6 py-2.5 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-indigo-500/50 transition-all duration-200"
						>
							{t("home.projects")}
						</button>
					</div>
				</div>

				<div className="hidden md:flex flex-shrink-0">
					<div className="w-72 h-72 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
						<img
							src="/photo.jpg"
							alt="Kaio Santos Nunes"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
