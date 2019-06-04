import React from 'react';
import styled from "styled-components";


const CardContainer = styled.div`
    width : 250px;
    height : 200px;
    background-color : ${props => props.color} ;
    margin: 20px ; 
    border: 5px;
`;
export default class Card extends React.Component {
    state = { aa: 'changed' };
    handleClickCard = () => {
        console.log('handleClickCard ');
        this.setState({
            aa: 'JJJJJJJJJ'
        })
    }
    render() {
        const { title, color, subtitle } = this.props;
        return (
            <CardContainer color={color} onClick={() => this.handleClickCard()}>
                <div class="ui-g">
                    <div class="ui-g-1"></div>
                    <div class="ui-g-3" align='left' > title : {title}</div>
                    <div class="ui-g-3" align='left'> subtitle : {subtitle}</div>
                </div>
            </CardContainer>
        );
    }
}