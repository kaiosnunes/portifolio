import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
	const { t } = useTranslation();

	const contacts = [
		{
			icon: <Phone size={16} />,
			label: t("contact.phone"),
			value: "+55 28 99986-0328",
			href: "tel:+5528999860328",
		},
		{
			icon: <Mail size={16} />,
			label: t("contact.email"),
			value: "hello@reallygreatsite.com",
			href: "mailto:hello@reallygreatsite.com",
		},
		{
			icon: <Github size={16} />,
			label: "GitHub",
			value: "github.com/kaio",
			href: "https://github.com",
		},
		{
			icon: <Linkedin size={16} />,
			label: "LinkedIn",
			value: "linkedin.com/in/kaio",
			href: "https://linkedin.com",
		},
	];

	return (
		<section
			id="contact"
			className="min-h-screen flex flex-col justify-center px-6 py-16"
		>
			<div className="max-w-5xl mx-auto w-full">
				<h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">
					{t("contact.title")}
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div className="flex flex-col gap-4">
						<p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
							{t("contact.description")}
						</p>

						<div className="flex flex-col gap-3 mt-2">
							{contacts.map(({ icon, label, value, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 group"
								>
									<span className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:border-indigo-500/50 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-all duration-200">
										{icon}
									</span>
									<div className="flex flex-col">
										<span className="text-xs text-zinc-400 dark:text-zinc-500">
											{label}
										</span>
										<span>{value}</span>
									</div>
								</a>
							))}
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<a
							href="https://drive.google.com/uc?export=download&id=SEU_FILE_ID"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white transition-colors duration-200 w-fit"
						>
							{t("contact.downloadCv")}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
