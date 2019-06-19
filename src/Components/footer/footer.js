
import React from 'react';
import './footer.css';
import styled from 'styled-components';
export default function Footer(props){
    const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 104px;
    `;
    const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 3;
    `;
    const Li = styled.li`
    display: inline-block;
    padding: 0 .4%;
    margin: 1% .4%;
    `;
    const A = styled.a`
    color: #003569;
    text-transform: uppercase;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    &:visited {
        color: #003569;
        text-transform: uppercase;
        text-align: center;
        display: inline-block;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
    }
    `;
    const Span = styled.span`
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
    `;

    return (        
        <Footer>
            <Ul>
                <Li><A href={'/'}>About us</A></Li>
                <Li><A href={'/'}>Support</A></Li>
                <Li><A href={'/'}>Press</A></Li>
                <Li><A href={'/'}>API</A></Li>
                <Li><A href={'/'}>Jobs</A></Li>
                <Li><A href={'/'}>privacy</A></Li>
                <Li><A href={'/'}>Tearms</A></Li>
                <Li><A href={'/'}>Directory</A></Li>
                <Li><A href={'/'}>Profiles</A></Li>
                <Li><A href={'/'}>Hashtags</A></Li>
                <Li><A href={'/'}>Language</A></Li>      
            </Ul>
            <Span>© 2019 INSTAGRAM</Span>
        </Footer>
    )
} 