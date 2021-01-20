import styled from "styled-components";
import { Text } from "../../atoms/text";

interface ToggleProps {
  text: string;
  enabled: boolean;
  onToggle: () => void;
}

export const Toggle = ({ text, enabled, onToggle }: ToggleProps) => {
  return (
    <StyledContainer enabled={enabled} onClick={onToggle}>
      <StyledToggle align={"center"} weidth={"100"} fontSize={"0.7rem"}>
        {text}
      </StyledToggle>
    </StyledContainer>
  );
};

interface StyledContainerProps {
  enabled: boolean;
}

const StyledContainer = styled.div`
  cursor: pointer;
  background: ${(p) => p.theme.bg};
  width: ${(p) => p.theme.unit(4)};
  border-radius: ${(p) => p.theme.unit(1)};
  transition: all 0.3s;
  padding-left: 0px;
  ${(p: StyledContainerProps) =>
    !!p.enabled &&
    `
        padding-left: 15px;
    `}
`;

const StyledToggle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0;
  background: #f00;
  background: ${(p) => p.theme.fg};
  color: ${(p) => p.theme.text};
  width: ${(p) => p.theme.unit(2)};
  height: ${(p) => p.theme.unit(2)};
  padding-bottom: ${(p) => p.theme.unit(0.5)};
  margin: ${(p) => p.theme.unit(0.2)};
  border-radius: 100%;
`;
