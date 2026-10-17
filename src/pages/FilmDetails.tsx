
import { useParams, Link } from "react-router";
import { useFilm } from "../hooks/useFilm";

const FilmDetails = () => {
    const { id } = useParams<"id">();

    const { film, loading, error } = useFilm(id);

    if (loading) {
        return <p>Carregando filme...</p>;
    }

    if (error) {
        return (
            <main>
                <p>{error}</p>
                <Link to="/">Voltar para filmes</Link>
            </main>
        );
    }

    if (!film) {
        return (
            <main>
                <p>Filme não encontrado.</p>
                <Link to="/">Voltar para filmes</Link>
            </main>
        );
    }

    return (
        <main>
            <h1>{film.title}</h1>
            <p>{film.description}</p>
            <p>Diretor: {film.director}</p>
            <p>Produtor: {film.producer}</p>
            <p>Ano de lançamento: {film.release_date}</p>
            <p>Rotten Tomatoes: {film.rt_score}%</p>

            <img
                src={film.movie_banner}
                alt={`Cena do filme ${film.title}`}
            />

            <Link to="/">Voltar para filmes</Link>
        </main>
    );
};

export default FilmDetails;
