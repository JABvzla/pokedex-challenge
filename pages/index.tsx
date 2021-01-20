import PokeDex from "../components/templates/pokedex";
import { PAGIANTE_LIMIT } from "../contants/pagination-limit";
import { getPokemonListPopulated } from "../services/pokemon";

export default PokeDex;
interface HomeServerSideProps {
  query: {
    p?: string;
  };
}

export const getServerSideProps = async (context: HomeServerSideProps) => {
  const { p = 0 } = context.query;
  const pokemons = await getPokemonListPopulated(+p * PAGIANTE_LIMIT);

  return {
    props: {
      page: p,
      pokemons,
    },
  };
};
