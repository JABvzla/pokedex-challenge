import { useState } from "react";
import { Grid } from "../components/organisms";
import { PAGIANTE_LIMIT } from "../contants/pagination-limit";
import { getPokemonListPopulated } from "../services/pokemon";

interface HomeProps {
  pokemons: Pokemon[];
}

const usePagination = (p: number = 1) => {
  const [page, setPage] = useState<number>(p);
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    page > 1 && setPage(page - 1);
  };

  return { page, next, prev };
};

export default function Home({ pokemons }: HomeProps) {
  const { page, next, prev } = usePagination();
  // const params =  process.browser? new URLSearchParams(window.location.search) : { get: () => null};
  // const pParam = params.get('p') || 1;

  const paginated = pokemons.slice(
    (page - 1) * PAGIANTE_LIMIT,
    page * PAGIANTE_LIMIT
  );
  return (
    <div>
      <Grid pokemons={paginated} page={page} onNext={next} onPrev={prev} />
    </div>
  );
}

export const getStaticProps = async () => {
  const allPokemons = await getPokemonListPopulated();
  return {
    props: {
      pokemons: allPokemons,
    },
  };
};
