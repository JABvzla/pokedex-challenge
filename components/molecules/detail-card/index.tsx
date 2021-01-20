import styled from "styled-components";
import { Text } from "../../atoms";
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
          <SpriteSelector pokemon={pokemon} />
          <Text fontSize={"2rem"} align="center" weidth="bold">
            {pokemon.name.toUpperCase()}
          </Text>

          <Text keyText="Types" fontSize="1.3rem" align={"center"} />
          <TagsContainer>
            {pokemon.types.map((t) => (
              <StyledTag align={"center"} weidth={"100"} fontSize={"0.7rem"}>
                {t.type.name.toUpperCase()}
              </StyledTag>
            ))}
          </TagsContainer>
        </>
      )}
    </StyledDetailCard>
  );
};

interface StyledDetailCardProps {
  selected: boolean;
}

const StyledDetailCard = styled.div`
  transition: height 1s, opacity 0.8s 0.5s;
  height: 0px;
  opacity: 0;
  overlow: hidden;
  ${(p: StyledDetailCardProps) =>
    p.selected &&
    `
    height: 450px;
    opacity: 1;
  `}
  margin-bottom: ${(p) => p.theme.unit(2)};
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(p) => p.theme.unit(1)};
  margin-bottom: ${(p) => p.theme.unit(2)};
`;

const StyledTag = styled(Text)`
  color: ${(p) => p.theme.text};
  background: ${(p) => p.theme.textAccent};
  padding: ${(p) => p.theme.unit(1)};
  margin: ${(p) => p.theme.unit(0.2)};
  border-radius: ${(p) => p.theme.unit(1)};
`;
