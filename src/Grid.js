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

    ${({span1}) => span1 && css `
        width: calc(100%/12);
    `}

    ${({span6}) => span6 && css`
        width: calc(100%/2);
    ` }

    ${({span4}) => span4 && css `
        width: calc(100%/3);
    `}

    ${({span3}) => span3 && css `
        width: calc(100%/4);
    `}

    ${({col5}) => col5 && css `
        width: calc(100%/5);
    `}

    ${({span2}) => span2 && css `
        width: calc(100%/6);
    `}
`

const Grid = () => {
    return (
            <GridContainer>
                <Row center >
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
                    <Col span1>span1</Col>
               
                </Row>

                <Row spaceBetween alignCenter>
                    <Col span6>span6</Col>
                    <Col span6 style={{height: "200px"}}>span6</Col>
                </Row>

                <Row flexEnd>
                    <Col span4>span4</Col>
                    <Col span4>span4</Col>
                    <Col span4>span4</Col>
                </Row>

                <Row>
                    <Col span3>span3</Col>
                    <Col span3>span3</Col>
                    <Col span3>span3</Col>
                    <Col span3>span3</Col>
                </Row>

                <Row>
                    <Col col5>col5</Col>
                    <Col col5>col5</Col>
                    <Col col5>col5</Col>
                    <Col col5>col5</Col>
                    <Col col5>col5</Col>
                </Row>

                <Row>
                    <Col span2>span2</Col>
                    <Col span2>span2</Col>
                    <Col span2>span2</Col>
                    <Col span2>span2</Col>
                    <Col span2>span2</Col>
                    <Col span2>span2</Col>

                
                </Row>
            </GridContainer> 
    )
}

export default Grid;