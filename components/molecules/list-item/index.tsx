import { useState } from "react";
import styled from "styled-components";
import { Avatar, Card, Text, DetailCard } from "../../atoms";

interface ListItemProps {
  type: string;
  name: string;
  avatar: string;
}

export function ListItem(props: ListItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDetail = () => setIsOpen(!isOpen);
  return (
    <StyledListItem background={"#aac"} isOpen={isOpen} onClick={toggleDetail}>
      <Avatar src={props.avatar} background={"transparent"} />
      <Text align="auto" weidth="bolder" fontSize={10}>
        {props.name}
      </Text>
      <DetailCard isOpen={isOpen}>
        Habilidades descripciones imagenes
      </DetailCard>
    </StyledListItem>
  );
}

interface StyledListItemProps {
  isOpen: boolean;
  onClick?: () => void;
}

const StyledListItem = styled(Card)`
  cursor: pointer;
  transition: all 0.5s;
  transition-timing-function: ease;
  position: relative;
  left: 0;
  top: 0;

  width: ${(props) => props.theme.unit(20)};
  height: ${(props) => props.theme.unit(22)};
  margin: ${(props) => props.theme.unit(1)};

  ${(props: StyledListItemProps) =>
    !props.isOpen &&
    `
    &:hover {
      transform: scale(1.1);
    }    
`}

  ${(props: StyledListItemProps) =>
    !!props.isOpen &&
    `
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    
    width: 200px;
    height: 200px;    
  
  `}
`;
