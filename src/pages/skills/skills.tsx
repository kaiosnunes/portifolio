import { DrizzleOrm } from "@boxicons/react";
import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
	SiDocker,
	SiDotnet,
	SiGit,
	SiGithub,
	SiJsonwebtokens,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

interface Skill {
	name: string;
	icon: ReactNode;
}

interface SkillCategory {
	category: string;
	skills: Skill[];
}

export function Skills() {
	const { t } = useTranslation();

	const skillCategories: SkillCategory[] = [
		{
			category: t("skills.frontend"),
			skills: [
				{ name: "React", icon: <SiReact size={14} /> },
				{ name: "TypeScript", icon: <SiTypescript size={14} /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss size={14} /> },
			],
		},
		{
			category: t("skills.backend"),
			skills: [
				{ name: "Node.js", icon: <SiNodedotjs size={14} /> },
				{ name: "C#", icon: <SiDotnet size={14} /> },
				{ name: "JWT", icon: <SiJsonwebtokens size={14} /> },
				{ name: "bcrypt", icon: <ShieldCheck size={14} /> },
			],
		},
		{
			category: t("skills.database"),
			skills: [
				{ name: "SQL", icon: <SiMysql size={14} /> },
				{ name: "NoSQL", icon: <SiMongodb size={14} /> },
				{ name: "Prisma", icon: <SiPrisma size={14} /> },
				{ name: "Drizzle", icon: <DrizzleOrm /> },
			],
		},
		{
			category: t("skills.devops"),
			skills: [
				{ name: "Docker", icon: <SiDocker size={14} /> },
				{ name: "Git", icon: <SiGit size={14} /> },
				{ name: "GitHub", icon: <SiGithub size={14} /> },
			],
		},
	];

	return (
		<section
			id="skills"
			className="min-h-screen flex flex-col justify-center px-6 py-16 border-b border-zinc-200 dark:border-zinc-800"
		>
			<div className="max-w-5xl mx-auto w-full">
				<h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
					{t("skills.title")}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skillCategories.map(({ category, skills }) => (
						<div key={category} className="flex flex-col gap-4">
							<h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
								{category}
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map(({ name, icon }) => (
									<span
										key={name}
										className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900"
									>
										{icon}
										{name}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
