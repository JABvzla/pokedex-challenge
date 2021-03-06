import { PokeApi } from "../poke-api";

interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}

export async function getPokemonList(
  offset: number
): Promise<PokemonListResponse> {
  const result = await PokeApi<PokemonListResponse>("pokemon", offset);
  return result;
}
