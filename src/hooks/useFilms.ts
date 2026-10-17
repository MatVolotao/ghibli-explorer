
import { useEffect, useState } from "react";
import type { Film } from "../types/film";
import { getFilms } from "../services/ghibliApi";

export const useFilms = () => {
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

    return { filmList, loading, error };
};
