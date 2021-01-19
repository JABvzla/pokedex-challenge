import { ReactNode } from "react";
import Styled from "styled-components";
interface CardProps {
  background?: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  return <StyledCard {...props} />;
}

const StyledCard = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 10px;
  ${(p) => p.theme.shadown1};
  border-radius: ${(p) => p.theme.cardRound};
  background: ${(p) => p.theme.bg};
  ${(props: CardProps) =>
    props.background && `background: ${props.background};`}
`;
