import Styled from "styled-components";

interface TextProps {
  align: "auto" | "center" | "justify" | "left" | "right";
  weidth: "100" | "normal" | "bolder" | "bold" | "900";
  fontSize: number;
  children: string;
}

export function Text(props: TextProps) {
  return <StyledText {...props} />;
}

const StyledText = Styled.div`
  font-size: ${({ fontSize }: TextProps) => fontSize};
  align: ${({ align }: TextProps) => align};
  font-weight: ${({ weidth }: TextProps) => weidth};
  color: ${(p) => p.theme.text};
`;
