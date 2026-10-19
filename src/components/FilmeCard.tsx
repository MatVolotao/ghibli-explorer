import { Link } from "react-router";
import type { Film } from "../types/film";

interface FilmCardProps {
	film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
	return (
		<li className="group rounded-2xl border border-sage-300 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			<Link
				to={`/films/${film.id}`}
				className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-700">
				<div className="overflow-hidden rounded-t-2xl">
					<img
						src={film.movie_banner}
						alt={`Cena do filme ${film.title}`}
						loading="lazy"
						className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>

				<div className="p-5">
					<h3 className="font-display text-xl font-bold text-forest-950">{film.title}</h3>

					<p className="mt-2 text-sm font-medium text-forest-700">Explorar filme →</p>
				</div>
			</Link>
		</li>   
	);
};

export default FilmCard;
