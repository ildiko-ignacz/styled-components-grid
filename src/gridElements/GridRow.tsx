import styled, { css } from "styled-components";

export interface RowProps {
  align?: "center" | "top" | "bottom";
  justify?: "center" | "end" | "spaceBetween";
}

const GridRow = styled.div<RowProps>`
  display: flex;
  justify-content: flex-start;

  ${({ justify }) =>
    justify === "center" &&
    css`
      justify-content: center;
    `}

  ${({ justify }) =>
    justify === "spaceBetween" &&
    css`
      justify-content: space-between;
    `}

    ${({ justify }) =>
    justify === "end" &&
    css`
      justify-content: flex-end;
    `}

    ${({ align }) =>
    align === "center" &&
    css`
      align-items: center;
    `}

    ${({ align }) =>
    align === "top" &&
    css`
      align-items: flex-start;
    `}

    ${({ align }) =>
    align === "bottom" &&
    css`
      align-items: flex-end;
    `}
`;

export default GridRow;
