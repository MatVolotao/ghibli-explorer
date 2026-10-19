import { useFilms } from "../hooks/useFilms";
import FilmCard from "../components/FilmeCard";

const Home = () => {
	const { filmList, loading, error } = useFilms();

	if (loading) {
		return (
			<main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
				<div
					aria-hidden="true"
					className="size-12 animate-spin rounded-full border-4 border-sage-300 border-t-forest-800"
				/>

				<div role="status">
					<p className="font-display text-2xl text-forest-950">Carregando filmes...</p>

					<p className="mt-2 text-sm text-forest-700">
						Descobrindo histórias incríveis para você.
					</p>
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center px-6 text-center">
				<div className="w-full rounded-2xl border border-sage-300 bg-sage-100 p-8">
					<h1 className="font-display text-3xl text-forest-950">
						Não conseguimos carregar os filmes
					</h1>

					<p className="mt-4 leading-7 text-forest-800">{error}</p>

					<p className="mt-3 text-sm text-forest-700">
						Verifique sua conexão e tente novamente.
					</p>
				</div>
			</main>
		);
	}

	const sortedFilms = [...filmList].sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10);

	return (
		<main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
			<section className="mb-12">
				<p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-700">
					Um mundo de histórias
				</p>

				<h1 className="font-display text-3xl leading-tight text-forest-950 sm:text-4xl lg:text-5xl">
					Descubra a magia do Studio Ghibli
				</h1>

				<p className="mt-5 max-w-2xl text-lg text-forest-800">
					Explore histórias inesquecíveis e mundos extraordinários através de seus filmes.
				</p>
			</section>

			<section aria-labelledby="films-heading">
				<div className="mb-6 flex items-end justify-between gap-4">
					<h2 id="films-heading" className="font-display text-3xl text-forest-950">
						Explore os filmes
					</h2>

					<span className="shrink-0 text-sm text-forest-700">
						{sortedFilms.length} filmes
					</span>
				</div>

				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{sortedFilms.map((film) => (
						<FilmCard key={film.id} film={film} />
					))}
				</ul>
			</section>
		</main>
	);
};

export default Home;
