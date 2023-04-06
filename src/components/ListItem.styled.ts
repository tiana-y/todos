import styled from "styled-components/macro";

export const ListItemWrapper = styled.div<{ $indent: number }>`
  margin-left: 30px;
  margin-bottom: 10px;
  font-size: 26px;
  margin-left: ${(props) => `${props.$indent * 40}px`};
`;
export const ExpandToggle = styled.div<{ $expanded: boolean }>`
  display: inline;
  position: relative;
  top: ${(props) => (props.$expanded ? "-30px" : "-10px")};
  svg {
    cursor: pointer;
    transform: ${(props) => (props.$expanded ? "rotateX(180deg)" : "none")};
    width: 30px;
    height: 30px;
    transition: 0.5s all ease;
  }
`;
