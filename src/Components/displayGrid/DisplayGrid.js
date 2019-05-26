import React from 'react';
import styled from 'styled-components';

export default function DisplayGrid(props) {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        padding: 20px;
    `
    const GridContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    `
    const ImageContainer = styled.div`
        width: 293px;
        height: 293px;
        position: relative;
        margin: 16px;
    `
    const GridImage = styled.img`
        width: 100%;
        height: 100%;
    `
    return (
        <Container>
           { props.path.map(post =>  
                <GridContainer key={post._id}>
                        <GridImage alt={post.caption} src={post.image}/>
                </GridContainer>
                )}
        </Container>
    )        
}

