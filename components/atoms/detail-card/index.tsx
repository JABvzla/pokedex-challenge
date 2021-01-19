import styled from "styled-components";
import { Card } from "../card";

interface DetailCardProps {
  isOpen: boolean;
  onClick?: () => void;
}

export const DetailCard = styled(Card)`
  opacity: 0;
  transition: all 0.3s;
  transition-timing-function: ease;

  ${(props: DetailCardProps) =>
    !!props.isOpen &&
    `
  transition: all 0.5s .4s;
  opacity: 1;  
`}
`;
