import { useParams, Link } from "react-router";
import { useFilm } from "../hooks/useFilm";

const FilmDetails = () => {
	const { id } = useParams<"id">();

	const { film, loading, error } = useFilm(id);

	if (loading) {
		return (
			<main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
				<div
					aria-hidden="true"
					className="size-12 animate-spin rounded-full border-4 border-sage-300 border-t-forest-800"
				/>

				<div role="status">
					<p className="font-display text-2xl text-forest-950">Carregando filme...</p>

					<p className="mt-2 text-sm text-forest-700">Preparando sua próxima aventura.</p>
				</div>
			</main>
		);
	}

	if (error) {
		return (
			<main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
				<div className="rounded-2xl border border-sage-300 bg-sage-100 p-8">
					<h1 className="font-display text-3xl text-forest-950">Algo deu errado</h1>

					<p className="mt-4 leading-7 text-forest-800">{error}</p>

					<Link
						to="/"
						className="mt-6 inline-block rounded-xl bg-forest-800 px-6 py-3 font-medium text-cream-50 transition-colors hover:bg-forest-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-700">
						Voltar para filmes
					</Link>
				</div>
			</main>
		);
	}

	if (!film) {
		return (
			<main className="mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
				<h1 className="font-display text-3xl text-forest-950">Filme não encontrado</h1>

				<Link
					to="/"
					className="font-medium text-forest-700 underline underline-offset-4 hover:text-forest-950">
					Voltar para filmes
				</Link>
			</main>
		);
	}

	return (
		<main className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-14">
			<Link
				to="/"
				className="mb-6 inline-block font-medium text-forest-700 hover:text-forest-950">
				← Voltar para filmes
			</Link>

			<section className="relative aspect-video overflow-hidden rounded-3xl">
				<img
					src={film.movie_banner}
					alt={`Cena do filme ${film.title}`}
					className="h-full w-full object-cover"
				/>

				<div className="absolute inset-0 bg-linear-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

				<div className="absolute bottom-0 left-0 p-6 sm:p-10">
					<h1 className="font-display text-3xl font-bold text-cream-50 sm:text-5xl">
						{film.title}
					</h1>
				</div>
			</section>

			<section className="mt-10">
				<h2 className="mb-4 font-display text-2xl text-forest-950">Sinopse</h2>

				<p className="leading-8 text-forest-800">{film.description}</p>

				<section className="mt-10 border-t border-sage-300 pt-8">
					<h2 className="mb-6 font-display text-2xl text-forest-950">Ficha técnica</h2>

					<dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<div className="rounded-2xl bg-sage-100 p-5">
							<dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-700">
								Diretor
							</dt>
							<dd className="font-medium text-forest-950">{film.director}</dd>
						</div>

						<div className="rounded-2xl bg-sage-100 p-5">
							<dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-700">
								Produtor
							</dt>
							<dd className="font-medium text-forest-950">{film.producer}</dd>
						</div>

						<div className="rounded-2xl bg-sage-100 p-5">
							<dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-700">
								Lançamento
							</dt>
							<dd className="font-medium text-forest-950">{film.release_date}</dd>
						</div>

						<div className="rounded-2xl bg-sage-100 p-5">
							<dt className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-700">
								Rotten Tomatoes
							</dt>
							<dd className="font-medium text-forest-950">{film.rt_score}%</dd>
						</div>
					</dl>
				</section>
			</section>
		</main>
	);
};

export default FilmDetails;
