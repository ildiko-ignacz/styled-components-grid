import styled, {css} from 'styled-components';
import rem from '../util/rem';

export interface ColProps {
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
}

const GridColumn = styled.div<ColProps>`
    background-color: #edf4ff;
    border: 1px solid #76AAFE;
    padding: ${rem(24)};
    width: 100%;

    ${({size}) => size === "1" && css `
        width: calc(100%/12);
    `}

    ${({size}) => size === "2" && css `
        width: calc(100%/6);
    `}

    ${({size}) => size === "3" && css `
        width: calc(100%/4);
    `}

    ${({size}) => size === "4" && css `
        width: calc(100%/3);
    `}

    ${({size}) => size === "5" && css `
        width: 41.66666667%;
    `}

    ${({size}) => size === "6" && css`
        width: calc(100%/2);
    ` }

    ${({size}) => size === "7" && css`
        width: 58.33333333%;
    ` }

    ${({size}) => size === "8" && css`
        width: 66.66666667%;
    ` }

    ${({size}) => size === "9" && css`
        width: 75%;
    ` }

    ${({size}) => size === "10" && css`
        width: calc(100% - 15%);
    ` }

    ${({size}) => size === "11" && css`
        width: 91.66666667%;
    ` }
`

export default GridColumn;