import { getPokemonListPopulated } from "./list-populated";

test("Should be response all pokemon with details", async () => {
  // Arrange
  const expectLength = 5;
  const expectBulbasaur = "bulbasaur";

  // Action
  const result = await getPokemonListPopulated();

  // Asserts
  expect(result?.length).toStrictEqual(expectLength);
  expect(result[0].name).toStrictEqual(expectBulbasaur);
}, 30000);
