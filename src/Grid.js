import React from 'react';
import styled, {css} from 'styled-components';
import rem from './util/rem';



const GridContainer = styled.div`
    width: 100%;
`
const Row = styled.div`
    display: flex;
    justify-content: flex-start;

    ${({center}) => center && css`
        justify-content: center;
    `}

    ${({spaceBetween}) => spaceBetween && css`
        justify-content: space-between;
    `}

    ${({flexEnd}) => flexEnd && css`
        justify-content: flex-end;
    `}

    ${({alignCenter}) => alignCenter && css`
        align-items: center;
    `}

    ${({alignTop}) => alignTop && css`
        align-items: flex-start;
    `}

    ${({alignBottom}) => alignBottom && css`
        align-items: flex-end;
    `}

    ${({stretch}) => stretch && css`
        align-items: stretch;
    `}
`

const Col = styled.div`
    background-color: #76AAFE;
    margin: ${rem(5)} ${rem(5)};
    padding: ${rem(24)};
    width: 100%;

    ${({spanSize}) => spanSize === "1" && css `
        width: calc(100%/12);
    `}

    ${({spanSize}) => spanSize === "6" && css`
        width: calc(100%/2);
    ` }

    ${({spanSize}) => spanSize === "4" && css `
        width: calc(100%/3);
    `}

    ${({spanSize}) => spanSize === "3" && css `
        width: calc(100%/4);
    `}

    ${({spanSize}) => spanSize === "5" && css `
        width: calc(100%/5);
    `}

    ${({spanSize}) => spanSize === "2" && css `
        width: calc(100%/6);
    `}
`

const Grid = () => {
    return (
            <GridContainer>
                <Row center >
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col>
                    <Col spanSize="1">span1</Col> 
                </Row>

                <Row spaceBetween alignCenter>
                    <Col spanSize="6">span6</Col>
                    <Col spanSize="6" style={{height: "200px"}}>span6</Col>
                </Row>

                <Row flexEnd>
                    <Col spanSize="4">span4</Col>
                    <Col spanSize="4">span4</Col>
                    <Col spanSize="4">span4</Col>
                </Row>

                <Row>
                    <Col spanSize="3">span3</Col>
                    <Col spanSize="3">span3</Col>
                    <Col spanSize="3">span3</Col>
                    <Col spanSize="3">span3</Col>
                </Row>

                <Row>
                    <Col spanSize="5">col5</Col>
                    <Col spanSize="5">col5</Col>
                    <Col spanSize="5">col5</Col>
                    <Col spanSize="5">col5</Col>
                    <Col spanSize="5">col5</Col>
                </Row>

                <Row>
                    <Col spanSize="2">span2</Col>
                    <Col spanSize="2">span2</Col>
                    <Col spanSize="2">span2</Col>
                    <Col spanSize="2">span2</Col>
                    <Col spanSize="2">span2</Col>
                    <Col spanSize="2">span2</Col>
                </Row>

            </GridContainer> 
    )
}

export default Grid;