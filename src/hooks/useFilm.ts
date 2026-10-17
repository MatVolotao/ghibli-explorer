
import { useEffect, useState } from "react";
import type { Film } from "../types/film";
import { getFilmById } from "../services/ghibliApi";

export const useFilm = (id: string | undefined) => {
    const [film, setFilm] = useState<Film | null>(null);
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
                    throw new Error("ID não encontrado");
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

    return { film, loading, error };
};
