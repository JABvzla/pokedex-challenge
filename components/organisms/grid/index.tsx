import styled from "styled-components";
import { Card } from "../../atoms";
import { ListItem, Paginate } from "../../molecules";

interface GridProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
  pokemons: Pokemon[];
}

export function Grid(props: GridProps) {
  return (
    <StyledGrid>
      {props.pokemons?.map((pokemon, i) => (
        <ListItem
          key={i}
          name={pokemon.name}
          type="fly"
          avatar={pokemon.sprites.front_default}
        />
      ))}
      <Paginate page={props.page} onNext={props.onNext} onPrev={props.onPrev} />
    </StyledGrid>
  );
}

const StyledGrid = styled(Card)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  margin: 10px;
`;
