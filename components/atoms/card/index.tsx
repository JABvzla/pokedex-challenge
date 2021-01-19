import { ReactNode } from "react";
import Styled from "styled-components";
interface CardProps {
  children: ReactNode;
}

export function Card(props: CardProps) {
  return <StyledCard>{props.children}</StyledCard>;
}

const StyledCard = Styled.div`
  background: ${(p) => p.theme.bg}
`;
