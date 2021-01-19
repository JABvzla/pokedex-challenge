import { PokeApi } from "../poke-api";

export async function getPokemonById(pokemonId: number): Promise<Pokemon> {
  const result = await PokeApi<Pokemon>(`pokemon/${pokemonId}/`);
  return result;
}
