import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { getColorByType } from "../../services/pokemon";
import { DetailCard } from "../molecules";
import { Grid } from "../organisms";

interface PokeDexProps {
  pokemons: Pokemon[];
  page: number;
  nextUrl: string;
  prevUrl: string;
}

export default function PokeDex({
  pokemons,
  page,
  nextUrl,
  prevUrl,
}: PokeDexProps) {
  const navigate = (_url: string) => () => {};
  const [selected, setSelected] = useState<number>(-1);

  const onSelect = (id: number) => () => {
    if (selected === id) {
      return setSelected(-1);
    }
    return setSelected(id);
  };

  const backgroundColor =
    selected >= 0
      ? getColorByType(pokemons[selected].types[0].type.name)
      : "#eee";

  return (
    <div>
      <Head>
        <title>Pokedex Page: {page}</title>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=0.8, minimum-scale=0.8, width=500"
        />
      </Head>

      <StyledContainer background={backgroundColor}>
        <DetailCard selected={selected != -1} pokemon={pokemons[selected]} />
        <Grid
          pokemons={pokemons}
          page={page}
          onNext={navigate(nextUrl)}
          onPrev={navigate(prevUrl)}
          selected={selected}
          onSelect={onSelect}
        />
      </StyledContainer>
    </div>
  );
}

interface StyledContainerProps {
  background: string;
}

const StyledContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding: ${(p) => p.theme.unit(1)};
  background: ${(p: StyledContainerProps) => p.background};
`;
