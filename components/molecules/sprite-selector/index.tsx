import { useState } from "react";
import styled from "styled-components";
import { Avatar } from "../../atoms";
import { SmallButton } from "../../atoms/small-button";

type Direction = "front" | "back";
type Color = "default" | "shiny";

interface SpriteSelectorProps {
  pokemon: Pokemon;
}

export const SpriteSelector = ({ pokemon }: SpriteSelectorProps) => {
  const [direction, setDirection] = useState<Direction>("front");
  const [color, setColor] = useState<Color>("default");

  const invertedColor = color === "default" ? "shiny" : "default";
  const invertedDirection = direction === "front" ? "back" : "front";

  const changeColor = () => setColor(invertedColor);
  const changeDirection = () => setDirection(invertedDirection);

  return (
    <SpriteSelectorContainer>
      <BigAvatar src={pokemon.sprites[`${direction}_${color}`]} />
      <ButtonContainer>
        <SmallButton color={"white"} onClick={changeColor}>
          <SmallAvatar src={pokemon.sprites[`${direction}_${invertedColor}`]} />
        </SmallButton>
        <SmallButton color={"white"} onClick={changeDirection}>
          <SmallAvatar src={pokemon.sprites[`${invertedDirection}_${color}`]} />
        </SmallButton>
      </ButtonContainer>
    </SpriteSelectorContainer>
  );
};

const SpriteSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => p.theme.unit(2)};
  max-width: ${(p) => p.theme.unit(50)};
  margin: auto;
`;

const BigAvatar = styled(Avatar)`
  margin-left: auto;
  margin-right: auto;
  height: ${(p) => p.theme.unit(20)};
`;

const SmallAvatar = styled(Avatar)`
  height: ${(p) => p.theme.unit(6)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(p) => p.theme.unit(0)} ${(p) => p.theme.unit(1)};
`;
