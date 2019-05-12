import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ListBox() {
    const Wrapper = styled.div`
        position: absolute;
        top: 1px;
        left: 1px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
        `

    return (
        <Wrapper>
          <h1>hello</h1>  
        </Wrapper>
    )
}