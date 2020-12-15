// import React from 'react';
import styled, {css} from 'styled-components';
import rem from './util/rem';
import * as React from "react";
// import GridColumn from './Grid/GridColumn';
// import GridRow from './Grid/GridColumn';




const GridContainer = styled.div`
    width: 100%;
`
const Row = styled.div<RowProps>`
    display: flex;
    justify-content: flex-start;
    

    ${({justify}) => justify === "center" && css`
        justify-content: center;
    `}

    ${({justify}) => justify === "spaceBetween" && css`
        justify-content: space-between;
    `}

    ${({justify}) => justify === "flexEnd" && css`
        justify-content: flex-end;
    `}

    ${({align}) => align === "center" && css`
        align-items: center;
    `}

    ${({align}) => align === "top" && css`
        align-items: flex-start;
    `}

    ${({align}) => align === "bottom" && css`
        align-items: flex-end;
    `}
`

const Col = styled.div<ColProps>`
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


export interface ColProps {
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
}



export interface RowProps {
    size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";
    align?: "center" | "top" | "bottom";
    justify?: "center" | "alignCenter" | "flexEnd" | "spaceBetween" ;
}


const Grid = (props: RowProps) => {
    return (

        <div>

            <h1 style={{padding: "35px"}}>Column sizes in width</h1>

            <div style={{padding: "35px", marginBottom: "40px"}}>

            <GridContainer>
                <Row>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col>
                    <Col size="1">1 of 12</Col> 
                </Row>

                <Row>
                    <Col size="2">2 of 12</Col>
                    <Col size="2">2 of 12</Col>
                    <Col size="2">2 of 12</Col>
                    <Col size="2">2 of 12</Col>
                    <Col size="2">2 of 12</Col>
                    <Col size="2">2 of 12</Col>
                </Row>

                <Row>
                    <Col size="3">3 of 12</Col>
                    <Col size="3">3 of 12</Col>
                    <Col size="3">3 of 12</Col>
                    <Col size="3">3 of 12</Col>
                </Row>

                <Row>
                    <Col size="4">4 of 12</Col>
                    <Col size="4">4 of 12</Col>
                    <Col size="4">4 of 12</Col>
                </Row>

                <Row>
                    <Col size="5">5 of 12</Col>
                    <Col size="5">5 of 12</Col>
                    <Col size="2">2 of 12</Col>
                </Row>

                <Row>
                    <Col size="6">6 of 12</Col>
                    <Col size="10">10 of 12</Col>
                </Row>

                <Row>
                    <Col size="7">7 of 12</Col>
                    <Col size="5">5 of 12</Col>
                </Row>

                <Row>
                    <Col size="8">8 of 12</Col>
                    <Col size="4">4 of 12</Col>
                </Row>

                <Row>
                    <Col size="9">9 of 12</Col>
                    <Col size="3">3 of 12</Col>
                </Row>

                <Row>
                    <Col size="10">10 of 12</Col>
                    <Col size="2">2 of 12</Col>
                </Row>

                <Row>
                    <Col size="11">11 of 12</Col>
                    <Col size="3">1 of 12</Col>
                </Row>
            </GridContainer> 
            
        </div>
                

            <GridContainer>

                <h1 style={{padding: "35px"}}>Column alignments</h1>

                <div style={{padding: "35px", marginBottom: "40px"}}>

                    <Row align="top">
                        <Col style={{height: "150px"}}>a column</Col>
                        <Col style={{height: "100px"}}>a column</Col>
                        <Col style={{height: "50px"}}>a column</Col>
                    </Row>

                    <Row align="center">
                        <Col style={{height: "150px"}}>a column</Col>
                        <Col style={{height: "100px"}}>a column</Col>
                        <Col style={{height: "50px"}}>a column</Col>
                    </Row>

                    <Row align="bottom">
                        <Col style={{height: "150px"}}>a column</Col>
                        <Col style={{height: "100px"}}>a column</Col>
                        <Col style={{height: "50px"}}>a column</Col>
                    </Row>

                    <Row>
                        <Col>So to cover everything, let’s check out what happens if we add padding and margin. Nothing too special actually. In the first step of the calculation you just have to remember to subtract the margins as well.

The only thing to note is that in terms of box-sizing flex-basis behaves like the width property. That means that the calculation as well as the results change if the box-sizing property changes. If box-sizing was set to border-box, you would only work with the flex-basis and margin values in your calculation, because the padding is already included in the width.

</Col>
                        <Col>a column</Col>
                        <Col>a column</Col>
                    </Row>
                 

                </div>

            </GridContainer>
        </div>
            
    )
}



export default Grid;