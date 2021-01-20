import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { getColorByType } from "../../services/pokemon";
import { DetailCard } from "../molecules";
import { Grid } from "../organisms";
import { Toggle } from "../atoms";
import { useRouter } from "next/router";
import { useLanguage } from "../../services/language/useLanguage";

export interface PokeDexProps {
  page: number;
  pokemons: Pokemon[];
}

export default function PokeDex({ pokemons, page }: PokeDexProps) {
  const { language, toggleLanguage } = useLanguage();
  const router = useRouter();
  const navigate = (page: string | number) => {
    router.push({ query: { p: page } });
  };
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
          content="initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8, width=500"
        />
      </Head>
      <StyledContainer background={backgroundColor}>
        <Toggle
          text={language}
          onToggle={toggleLanguage}
          enabled={language === "en"}
        />
        <DetailCard selected={selected != -1} pokemon={pokemons[selected]} />
        <Grid
          pokemons={pokemons}
          page={page}
          onNext={() => navigate(+page + 1)}
          onPrev={() => navigate(+page - 1)}
          selected={selected}
          onSelect={onSelect}
          onNavigate={navigate}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  height: fit-content;
  & > div:nth-child(1) {
    margin-left: auto;
    margin-right: ${(p) => p.theme.unit(1)};
  }
`;
