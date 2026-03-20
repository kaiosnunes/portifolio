import { useTranslation } from "react-i18next";

export function About() {
	const { t } = useTranslation();

	return (
		<section
			id="about"
			className="min-h-screen flex flex-col justify-center px-6 py-16 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-5xl mx-auto w-full">
				<h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
					{t("about.title")}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div className="flex flex-col gap-6">
						<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
							{t("about.bio1")}
						</p>
						<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
							{t("about.bio2")}
						</p>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<span className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
								{t("about.education")}
							</span>
							<p className="text-zinc-900 dark:text-white font-medium">
								{t("about.educationDegree")}
							</p>
							<p className="text-sm text-zinc-500 dark:text-zinc-400">
								{t("about.educationSchool")}
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<span className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
								{t("about.languages")}
							</span>
							<p className="text-zinc-600 dark:text-zinc-400 text-sm">
								{t("about.portuguese")}
							</p>
							<p className="text-zinc-600 dark:text-zinc-400 text-sm">
								{t("about.english")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
