import { MainLayout } from "./layouts";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";

function App() {
	return (
		<MainLayout>
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</MainLayout>
	);
}

export default App;
