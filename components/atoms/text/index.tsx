import Styled from "styled-components";
import { useTranslation } from "react-i18next";

interface TextProps {
  align: "auto" | "center" | "justify" | "left" | "right";
  weidth: "100" | "normal" | "bolder" | "bold" | "900";
  fontSize: number;
  keyText?: string;
  children?: string;
}

export function Text(props: TextProps) {
  const { t } = useTranslation();
  const text = !!props.keyText ? t(props.keyText) : props.children;

  return <StyledText {...props}>{text}</StyledText>;
}

const StyledText = Styled.span`
  font-size: ${({ fontSize }: TextProps) => fontSize};
  align: ${({ align }: TextProps) => align};
  font-weight: ${({ weidth }: TextProps) => weidth};
  color: ${(p) => p.theme.text};
`;
