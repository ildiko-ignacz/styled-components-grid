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

    ${({col}) => col === "1" && css `
        width: calc(100%/12);
    `}

    ${({col}) => col === "6" && css`
        width: calc(100%/2);
    ` }

    ${({col}) => col === "4" && css `
        width: calc(100%/3);
    `}

    ${({col}) => col === "3" && css `
        width: calc(100%/4);
    `}

    ${({col}) => col === "5" && css `
        width: calc(100%/5);
    `}

    ${({col}) => col === "2" && css `
        width: calc(100%/6);
    `}
`

const Grid = () => {
    return (
            <GridContainer>
                <Row center >
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col>
                    <Col col="1">span1</Col> 
                </Row>

                <Row spaceBetween alignCenter>
                    <Col col="6">span6</Col>
                    <Col col="6" style={{height: "200px"}}>span6</Col>
                </Row>

                <Row flexEnd>
                    <Col col="4">span4</Col>
                    <Col col="4">span4</Col>
                    <Col col="4">span4</Col>
                </Row>

                <Row>
                    <Col col="3">span3</Col>
                    <Col col="3">span3</Col>
                    <Col col="3">span3</Col>
                    <Col col="3">span3</Col>
                </Row>

                <Row>
                    <Col col="5">col5</Col>
                    <Col col="5">col5</Col>
                    <Col col="5">col5</Col>
                    <Col col="5">col5</Col>
                    <Col col="5">col5</Col>
                </Row>

                <Row>
                    <Col col="2">span2</Col>
                    <Col col="2">span2</Col>
                    <Col col="2">span2</Col>
                    <Col col="2">span2</Col>
                    <Col col="2">span2</Col>
                    <Col col="2">span2</Col>
                </Row>

            </GridContainer> 
    )
}

export default Grid;