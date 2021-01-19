import { getPokemonById } from "./get-by-id";

test("PokeApi Should be response bulbasurt", async () => {
  // Arrange
  const expectResult = {
    name: "bulbasaur",
    type: "grass",
  };

  // Action
  const result: Pokemon = await getPokemonById(1);

  // Asserts
  expect(result.name).toStrictEqual(expectResult.name);
  expect(result.types[0].type.name).toStrictEqual(expectResult.type);
});
