import axios from "axios";
const POKEAPI = "https://pokeapi.co/api/v2";

export async function PokeApi<T>(
  section: string,
  offset: number = 0
): Promise<T> {
  return axios
    .get(`${POKEAPI}/${section}?limit=${5}&offset=${offset}`)
    .then((r) => r.data);
}
