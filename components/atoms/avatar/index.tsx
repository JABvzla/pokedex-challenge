import Styled from "styled-components";
interface AvatarProps {
  src: string;
  background?: string;
  round?: boolean;
}

export function Avatar(props: AvatarProps) {
  return <StyledAvatar {...props} />;
}

const StyledAvatar = Styled.img`
  background: ${(props) => props.theme.placeholder};
  ${(props: AvatarProps) => props.round && "border-radius: 100%"};
  ${(props: AvatarProps) =>
    props.background && `background: ${props.background};`}

`;
