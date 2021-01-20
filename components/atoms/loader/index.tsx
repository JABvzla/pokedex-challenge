import { ReactNode } from "react";
import styled from "styled-components";

interface LoaderProps {
  visible: boolean;
  children: ReactNode | ReactNode[];
}
export function Loader({ visible, children }: LoaderProps) {
  return (
    <StyledLoader visible={visible}>
      <div className="pokeballs">
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
          }
        />
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          }
        />
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png"
          }
        />
      </div>
      <div className="content">{children}</div>
    </StyledLoader>
  );
}

interface StyledLoaderProps {
  visible: boolean;
}
const StyledLoader = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #a33;
  & > .content {
    transition: all 0s;
    opacity: 0;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-20px);
    }
  }

  & > .pokeballs {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
  }
  & .pokeballs > img {
    width: 50px;
    height: 50px;
    animation-name: bounce;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;
  }
  & .pokeballs > img:nth-child(2n) {
    animation-delay: 0.3s;
  }
  & .pokeballs > img:nth-child(3n) {
    animation-delay: 0.6s;
  }

  ${(p: StyledLoaderProps) =>
    !p.visible &&
    `
    & > .content {
      transition: all 0.5s;
      opacity: 1;
      overflow: auto;
    }

    & > img {
      opacity: 0; 
    }
    overflow: auto;
  `}
`;
