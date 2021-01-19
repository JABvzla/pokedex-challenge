import axios from "axios";
import { PAGIANTE_LIMIT } from "../../contants/pagination-limit";
const POKEAPI = "https://pokeapi.co/api/v2";

export async function PokeApi<T>(
  section: string,
  offset: number = 0
): Promise<T> {
  return axios
    .get(`${POKEAPI}/${section}?limit=${PAGIANTE_LIMIT}&offset=${offset}`)
    .then((r) => r.data);
}
