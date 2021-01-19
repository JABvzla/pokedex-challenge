import { useState } from "react";
import styled from "styled-components";
import { Card } from "../../atoms";
import { ListItem, Paginate, DetailCard } from "../../molecules";

interface GridProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
  pokemons: Pokemon[];
}

export function Grid(props: GridProps) {
  const [selected, setSelected] = useState<number>(-1);

  const onSelect = (id: number) => () => {
    if (selected === id) {
      return setSelected(-1);
    }
    return setSelected(id);
  };

  return (
    <>
      <DetailCard
        selected={selected != -1}
        pokemon={props.pokemons[selected]}
      />
      <StyledGrid>
        {props.pokemons?.map((pokemon, i) => (
          <ListItem
            key={i}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            avatar={pokemon.sprites.front_default}
            selected={i === selected}
            onSelect={onSelect(i)}
          />
        ))}
        <Paginate
          page={props.page}
          onNext={props.onNext}
          onPrev={props.onPrev}
        />
      </StyledGrid>
    </>
  );
}

const StyledContainer = styled.div``;

const StyledGrid = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin-top: auto;
`;
