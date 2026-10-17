
import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Film } from "../types/film";
import { getFilms } from "../services/ghibliApi";

const Home = () => {
    const [filmList, setFilmList] = useState<Film[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const getData = async () => {
            try {
                const data = await getFilms(controller.signal);

                setFilmList(data);
            } catch {
                if (controller.signal.aborted) {
                    return;
                }

                setError(
                    "Não foi possível carregar os filmes. Tente novamente mais tarde.",
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
    }, []);

    if (loading) {
        return <p>Carregando filmes...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const sortedFilms = [...filmList]
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 10);

    return (
        <main>
            <h1>Lista de Filmes</h1>

            <ul>
                {sortedFilms.map((film, index) => (
                    <li key={film.id}>
                        <Link to={`/films/${film.id}`}>
                            <h2>{`${index + 1} - ${film.title}`}</h2>

                            <img
                                src={film.movie_banner}
                                alt={`Cena do filme ${film.title}`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Home;
