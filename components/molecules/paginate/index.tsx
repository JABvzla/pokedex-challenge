import styled from "styled-components";

interface PaginateProps {
  page: number;
  onNext: () => void;
  onPrev: () => void;
  onNavigate: (page: number) => void;
}

export function Paginate(props: PaginateProps) {
  return (
    <StyledPaginate>
      <div>
        <span onClick={props.onPrev}>{"<"}</span>
        {props.page > 2 && (
          <PaginationButton
            value={props.page - 2}
            onNavigate={props.onNavigate}
          />
        )}
        {props.page > 1 && (
          <PaginationButton
            value={props.page - 1}
            onNavigate={props.onNavigate}
          />
        )}
        <span className="selected">{props.page}</span>
        <PaginationButton
          value={props.page + 1}
          onNavigate={props.onNavigate}
        />
        <PaginationButton
          value={props.page + 2}
          onNavigate={props.onNavigate}
        />
        <span onClick={props.onNext}>{">"}</span>
      </div>
    </StyledPaginate>
  );
}

interface PaginationButtonProps {
  value: number;
  onNavigate: (page: number) => void;
}
const PaginationButton = (props: PaginationButtonProps) => {
  return (
    <span onClick={() => props.onNavigate(props.value)}>{props.value}</span>
  );
};

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
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: ${(p) => p.theme.text};
          background: ${(p) => p.theme.textAccent};
        }
      }
    }
    & span.selected {
      color: ${(p) => p.theme.text};
      background: ${(p) => p.theme.fg};
    }
  }
`;
