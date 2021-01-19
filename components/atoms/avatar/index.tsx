import Styled from "styled-components";
interface AvatarProps {
  src: string;
  round?: boolean;
}

export function Avatar(props: AvatarProps) {
  return <StyledAvatar {...props} />;
}

const StyledAvatar = Styled.img`
  ${(props: AvatarProps) => props.round && "border-radius: 100%"};  
`;
