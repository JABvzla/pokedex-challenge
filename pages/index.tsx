import PokeDex, { PokeDexProps } from "../components/templates/pokedex";
import { PAGIANTE_LIMIT } from "../contants/pagination-limit";
import { getPokemonListPopulated } from "../services/pokemon";

export default PokeDex;
interface HomeServerSideProps {
  query: {
    p?: string;
  };
}

interface ServerSidePropResult<T> {
  props: T;
}

export const getServerSideProps = async (
  context: HomeServerSideProps
): ServerSidePropResult<PokeDexProps> => {
  const { p = 1 } = context.query;
  const page: number = p <= 0 || isNaN(+p) ? 1 : +p;
  const result = await getPokemonListPopulated((page - 1) * PAGIANTE_LIMIT);

  return {
    props: {
      page,
      pokemons: result.pokemons,
    },
  };
};
