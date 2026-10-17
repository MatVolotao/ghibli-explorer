import type { Film } from "../types/film";

const BASE_URL = "https://ghibliapi.vercel.app";

export const getFilms = async (signal: AbortSignal): Promise<Film[]> => {
	const response = await fetch(`${BASE_URL}/films`, {
		signal,
	});

	if (!response.ok) {
		throw new Error(`Falha na requisição: HTTP ${response.status}`);
	}

	const data: Film[] = await response.json();

	return data;
};

export const getFilmById = async (id: string, signal: AbortSignal): Promise<Film> => {
	const response = await fetch(`${BASE_URL}/films/${id}`, {
		signal,
	});

	if (!response.ok) {
		throw new Error(`Falha na requisição: HTTP ${response.status}`);
	}

	const data: Film = await response.json();

	return data;
};
