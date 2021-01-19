import axios from "axios";
import { getPokemonList } from "../list/list";

export interface PokemonListPopulatedResponse {
  results: Pokemon[];
}

export async function getPokemonListPopulated(): Promise<Pokemon[]> {
  const pokemonList = await getPokemonList(0);
  const result = await Promise.all(
    pokemonList.results.map((pokemon) => axios.get(pokemon.url))
  );

  return result.map((promise) => promise.data);
}
