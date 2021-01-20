import styled from "styled-components";
import { Text } from "../../atoms/text";

interface TagProps {
  children: string;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <StyledTag align={"center"} weidth={"100"} fontSize={"0.7rem"}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled(Text)`
  color: ${(p) => p.theme.text};
  background: ${(p) => p.theme.textAccent};
  padding: ${(p) => p.theme.unit(1)};
  margin: ${(p) => p.theme.unit(0.2)};
  border-radius: ${(p) => p.theme.unit(1)};
`;
