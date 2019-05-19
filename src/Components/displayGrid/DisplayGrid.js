import React, { useContext } from 'react';
import { AppContext } from '../../AppContext/'
import styled from 'styled-components';

export default function DisplayGrid(props) {
    const GridContainer = styled.div`
        width: 293px;
        height: 293px;
        position: relative;
        margin: 2px;
    `
    const GridImage = styled.img`
        width: 100%;
        height: 100%;
    `
    return props.path.map(post =>  
            <GridContainer key={post._id}>
                    <GridImage alt={post.caption} src={post.image}/>
            </GridContainer>
            )

}
