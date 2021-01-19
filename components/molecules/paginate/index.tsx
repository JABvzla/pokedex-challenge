import styled from "styled-components";

interface PaginateProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
}

export function Paginate(props: PaginateProps) {
  return (
    <StyledPaginate>
      <div>
        <span onClick={props.onPrev}> back </span>
        <span> 1 </span>
        <span> 2 </span>
        <span className="selected"> 3 </span>
        <span> 4 </span>
        <span> 5 </span>
        <span onClick={props.onNext}> next </span>
      </div>
    </StyledPaginate>
  );
}

const StyledPaginate = styled.div`
  height: 20px;
  width: 100%;
  & div {
    min-width: ${(p) => p.theme.unit(40)};
    max-width: ${(p) => p.theme.unit(40)};
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    & span {
      ${(p) => p.theme.shadown1};
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(p) => p.theme.bg};
      color: ${(p) => p.theme.textAccent};
      border-radius: 100%;
      width: ${(p) => p.theme.unit(4)};
      height: ${(p) => p.theme.unit(4)};
      cursor: pointer;
      &:hover {
        color: ${(p) => p.theme.text};
        background: ${(p) => p.theme.textAccent};
      }
    }
    & span.selected {
      color: ${(p) => p.theme.text};
      background: ${(p) => p.theme.fg};
    }
  }
`;
