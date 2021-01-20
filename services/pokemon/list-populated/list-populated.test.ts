import { getPokemonListPopulated } from "./list-populated";

test("Should be response all pokemon with details", async () => {
  // Arrange
  const expectLength = 5;
  const expectBulbasaur = "bulbasaur";

  // Action
  const result = await getPokemonListPopulated(0);

  // Asserts
  expect(result.pokemons.length).toStrictEqual(expectLength);
  expect(result.pokemons[0].name).toStrictEqual(expectBulbasaur);
}, 30000);
