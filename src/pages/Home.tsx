
import { Link } from "react-router";
import { useFilms } from "../hooks/useFilms";

const Home = () => {
    const { filmList, loading, error } = useFilms();

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
