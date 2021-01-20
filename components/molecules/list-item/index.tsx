import styled from "styled-components";
import { getColorByType } from "../../../services/pokemon";
import { Avatar, Card, Text } from "../../atoms";

interface ListItemProps {
  type: TypeName;
  name: string;
  avatar: string;
  selected: boolean;
  onSelect: (id: number) => void;
}

export function ListItem(props: ListItemProps) {
  return (
    <StyledListItem
      background={getColorByType(props.type)}
      selected={props.selected}
      onClick={props.onSelect}
    >
      <Avatar src={props.avatar} />
      <Text align="auto" weidth="bold" fontSize={10}>
        {props.name.toUpperCase()}
      </Text>
    </StyledListItem>
  );
}

interface StyledListItemProps {
  selected: boolean;
  onClick?: (id: number) => void;
}

const StyledListItem = styled(Card)`
  cursor: pointer;
  transition: all 0.5s;
  transition-timing-function: ease;
  position: relative;
  left: 0;
  top: 0;
  margin: ${(props) => props.theme.unit(1)};

  ${(props: StyledListItemProps) =>
    !props.selected &&
    `
    &:hover {
      transform: scale(1.1);
    }    
`}

  ${(props: StyledListItemProps) =>
    !!props.selected &&
    `
    z-index: 999;
    transform: scale(1.3);
    top: -10px;
    border: 1px solid #fff;

  `}
`;
