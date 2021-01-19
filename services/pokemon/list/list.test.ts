import { getPokemonList } from "./list";

test("PokeApi Should be response correctly", async () => {
  // Arrange
  const expectLengths = 5;
  const expectNextPage = "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5";
  const expectPrevious = null;
  const offset = 0;

  // Action
  const result = await getPokemonList(offset);

  // Asserts
  expect(result.results.length).toBe(expectLengths);
  expect(result.next).toBe(expectNextPage);
  expect(result.previous).toBe(expectPrevious);
});
