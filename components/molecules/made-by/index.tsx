import styled from "styled-components";
import { Text } from "../../atoms";

interface MadeByProps {
  visible: boolean;
}

export function MadeBy({ visible }: MadeByProps) {
  return (
    <StyledMadeByContainer visible={visible}>
      <div>
        <Text
          fontSize={"1.5rem"}
          weidth={"normal"}
          align={"center"}
          keyText="challenge"
        />
        <img src="/logo-fravega.png" />
      </div>
      <Text
        fontSize={"1.5rem"}
        weidth={"normal"}
        align={"center"}
        keyText="made"
      />
    </StyledMadeByContainer>
  );
}

interface StyledMadeByContainerProps {
  visible: boolean;
}
const StyledMadeByContainer = styled.div`
  padding: 30px;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.6s;
  opacity: 1;

  & img {
    margin-top: ${(p) => p.theme.unit(0.3)};
    width: ${(p) => p.theme.unit(15)};
  }
  & span {
    color: ${(p) => p.theme.textAccent};
  }
  & > div {
    display: flex;
    align-items: center;
  }

  ${(p: StyledMadeByContainerProps) =>
    !!p.visible &&
    `
      opacity: 0;
    `}
`;
