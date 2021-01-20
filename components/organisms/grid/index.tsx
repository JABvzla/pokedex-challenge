import styled from "styled-components";
import { Card } from "../../atoms";
import { ListItem, Paginate } from "../../molecules";

interface GridProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
  onNavigate: (page: number) => void;
  onSelect: (id: number) => any;
  selected: number;
  pokemons: Pokemon[];
}

export function Grid(props: GridProps) {
  return (
    <StyledGrid>
      {props.pokemons?.map((pokemon, i) => (
        <ListItem
          key={i}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          avatar={pokemon.sprites.front_default}
          selected={i === props.selected}
          onSelect={props.onSelect(i)}
        />
      ))}
      <Paginate
        page={props.page}
        onNext={props.onNext}
        onPrev={props.onPrev}
        onNavigate={props.onNavigate}
      />
    </StyledGrid>
  );
}

const StyledGrid = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin-top: auto;
`;
