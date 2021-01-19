import { useState } from "react";
import { Grid } from "../components/organisms";
import { PAGIANTE_LIMIT } from "../contants/pagination-limit";
import { getPokemonListPopulated } from "../services/pokemon";

interface HomeProps {
  pokemons: Pokemon[];
  initialPage: number;
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

export default function Home({ pokemons, initialPage }: HomeProps) {
  const { page, next, prev } = usePagination(initialPage);

  return (
    <div>
      <Grid pokemons={pokemons} page={page} onNext={next} onPrev={prev} />
    </div>
  );
}

interface HomeServerSideProps {
  query: {
    p?: string;
  };
}

export const getServerSideProps = async (context: HomeServerSideProps) => {
  const { p = 1 } = context.query;
  const pokemons = await getPokemonListPopulated(+p * PAGIANTE_LIMIT);

  return {
    props: {
      initialPage: p,
      pokemons,
    },
  };
};
