
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import type { Film } from "../types/film";
import { getFilmById } from "../services/ghibliApi";

const FilmDetails = () => {
    const [film, setFilm] = useState<Film | null>(null);
    const { id } = useParams<"id">();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const getData = async () => {
            setLoading(true);
            setError(null);
            setFilm(null);

            try {
                if (!id) {
                    throw new Error("Id não encontrado");
                }

                const data = await getFilmById(id, controller.signal);

                setFilm(data);
            } catch {
                if (controller.signal.aborted) {
                    return;
                }

                setError(
                    "Não foi possível carregar o filme. Tente novamente mais tarde.",
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getData();

        return () => {
            controller.abort();
        };
    }, [id]);

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
