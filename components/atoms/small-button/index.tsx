import styled from "styled-components";

export const SmallButton = styled.div`
  transition: all 0.4s;
  background: ${(p) => p.color};
  border-radius: 100%;
  width: ${(p) => p.theme.unit(6)};
  height: ${(p) => p.theme.unit(6)};
  ${(p) => p.theme.shadown1};
  cursor: pointer;
  & :hover {
    opacity: 0.9;
  }
`;
