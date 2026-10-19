import { Link } from "react-router";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-cream-50">
			<header className="bg-forest-800 text-cream-50">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
					<Link to="/" className="text-2xl font-bold">
						Ghibli Explorer
					</Link>

					<nav>
						<Link to="/">Explorar filmes</Link>
					</nav>
				</div>
			</header>

			<div className="flex-1">
				<AppRoutes />
			</div>

			<footer className="bg-cream-100 px-6 py-5 text-center text-forest-800">
				<p>Ghibli Explorer — Projeto de portfólio</p>
			</footer>
		</div>
	);
}

export default App;
