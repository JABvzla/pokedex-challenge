import axios from "axios";
const POKEAPI = "https://pokeapi.co/api/v2";
const PAGIANTE_LIMIT = 5;

export async function PokeApi<T>(
  section: string,
  offset: number = 0
): Promise<T> {
  return axios
    .get(`${POKEAPI}/${section}?limit=${PAGIANTE_LIMIT}&offset=${offset}`)
    .then((r) => r.data);
}
