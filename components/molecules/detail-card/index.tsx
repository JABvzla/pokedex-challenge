import styled from "styled-components";
import { Avatar } from "../../atoms";

interface DetailCardProps {
  selected: boolean;
  pokemon: Pokemon;
  onClick?: () => void;
}

export const DetailCard = ({ pokemon, selected }: DetailCardProps) => {
  if (!selected) {
    return <></>;
  }

  return (
    <StyledDetailCard>
      {pokemon.name}
      <Avatar src={pokemon.sprites.front_default} />
      <Avatar src={pokemon.sprites.back_default} />
      <Avatar src={pokemon.sprites.front_shiny} />
      <Avatar src={pokemon.sprites.back_shiny} />

      {pokemon.types.map((t) => (
        <div>{t.type.name}</div>
      ))}
    </StyledDetailCard>
  );
};

const StyledDetailCard = styled.div`
  margin-bottom: ${(p) => p.theme.unit(2)};
  flex-grow: 1;
  width: 100%;
  background: #acc;
`;
