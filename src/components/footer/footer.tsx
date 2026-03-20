export function Footer() {
	return (
		<footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 px-6">
			<div className="max-w-5xl mx-auto flex items-center justify-center">
				<span className="text-sm text-zinc-500 dark:text-zinc-400">
					© {new Date().getFullYear()} Kaio Santos Nunes
				</span>
			</div>
		</footer>
	);
}
