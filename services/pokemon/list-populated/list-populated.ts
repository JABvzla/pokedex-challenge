import axios from "axios";
import { getPokemonList } from "../list/list";

export interface PokemonListPopulatedResponse {
  next: string;
  previous: string;
  pokemons: Pokemon[];
}

export async function getPokemonListPopulated(
  offset: number
): Promise<PokemonListPopulatedResponse> {
  const pokemonList = await getPokemonList(offset);
  const result = await Promise.all(
    pokemonList.results.map((pokemon) => axios.get(pokemon.url))
  );

  return {
    next: pokemonList.next,
    previous: pokemonList.previous,
    pokemons: result.map((promise) => promise.data),
  };
}
