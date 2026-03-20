import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Project {
	title: string;
	description: string;
	image: string;
	github: string;
	deploy: string;
}

const projects: Project[] = [
	{
		title: "Projeto 1",
		description: "Descrição breve do projeto e o que ele faz.",
		image: "https://placehold.co/600x400",
		github: "https://github.com",
		deploy: "https://vercel.app",
	},
	{
		title: "Projeto 2",
		description: "Descrição breve do projeto e o que ele faz.",
		image: "https://placehold.co/600x400",
		github: "https://github.com",
		deploy: "https://vercel.app",
	},
	{
		title: "Projeto 3",
		description: "Descrição breve do projeto e o que ele faz.",
		image: "https://placehold.co/600x400",
		github: "https://github.com",
		deploy: "https://vercel.app",
	},
];

export function Projects() {
	const { t } = useTranslation();

	return (
		<section
			id="projects"
			className="min-h-screen flex flex-col justify-center px-6 py-16 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-5xl mx-auto w-full">
				<h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
					{t("projects.title")}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<div
							key={project.title}
							className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 transition-all duration-300"
						>
							<div className="overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>

							<div className="p-5 flex flex-col gap-3">
								<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
									{project.title}
								</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
									{project.description}
								</p>
								<div className="flex items-center gap-3 mt-1">
									<a
										href={project.github}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
									>
										<Github size={15} />
										{t("projects.code")}
									</a>
									<a
										href={project.deploy}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
									>
										<ExternalLink size={15} />
										{t("projects.deploy")}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
