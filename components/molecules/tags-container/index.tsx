import styled from "styled-components";
import { Tag, Text } from "../../atoms";

interface TagsContainerProps {
  title: string;
  tags: string[];
}

export const TagsContainer = ({ title, tags }: TagsContainerProps) => {
  return (
    <StyledContainer>
      <Text
        keyText={title}
        fontSize="1.3rem"
        align={"center"}
        weidth="normal"
      />
      <StyledTagsContainer>
        {tags.map((text, i) => (
          <Tag key={i}>{text}</Tag>
        ))}
      </StyledTagsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: ${(p) => p.theme.unit(20)};
`;
const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(p) => p.theme.unit(1)};
  margin-bottom: ${(p) => p.theme.unit(2)};
`;
