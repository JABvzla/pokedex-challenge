import styled from "styled-components";
import { Text } from "../../atoms";
import { TagsContainer } from "../../molecules/tags-container";
import { SpriteSelector } from "../sprite-selector";

interface DetailCardProps {
  selected: boolean;
  pokemon: Pokemon;
  onClick?: () => void;
}

export const DetailCard = ({ pokemon, selected }: DetailCardProps) => {
  return (
    <StyledDetailCard selected={selected}>
      {selected && (
        <>
          <div>
            <TagsContainer
              title={"abilities"}
              tags={pokemon.abilities.map((a) => a.ability.name.toUpperCase())}
            />

            <TagsContainer
              title={"types"}
              tags={pokemon.types.map((t) => t.type.name.toUpperCase())}
            />
          </div>

          <StyledSpriteContainer>
            <SpriteSelector pokemon={pokemon} />
            <Text fontSize={"2rem"} align="center" weidth="bold">
              {pokemon.name.toUpperCase()}
            </Text>
          </StyledSpriteContainer>
        </>
      )}
    </StyledDetailCard>
  );
};

interface StyledDetailCardProps {
  selected: boolean;
}

const StyledSpriteContainer = styled.div`
  text-align: center;
`;

const StyledDetailCard = styled.div`
  transition: height 1s, opacity 0.8s 0.5s;
  height: 0px;
  opacity: 0;
  overlow: hidden;
  margin-bottom: ${(p) => p.theme.unit(2)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${(p: StyledDetailCardProps) =>
    p.selected &&
    `
    height: 350px;
    opacity: 1;
  `}
`;
