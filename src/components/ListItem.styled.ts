import styled from "styled-components/macro";

export const ListItemWrapper = styled.div`
  margin-left: 30px;
  margin-bottom: 10px;
  font-size: 24px;
`;
export const TextWrapper = styled.span<{ $done: boolean }>`
  text-decoration: ${props => props.$done ? 'line-through 1px' : 'none' };
`;