import React from 'react';
import PopupForm from '../popup-form/PopupForm';
import imageUs from './us.jpg';
import './nagia.css';
import { PromiseProvider } from 'mongoose';

export default function NagiaLeze(props){
    return (<React.Fragment>
           <PopupForm activate={props.activate} closePop={props.closePop}>
               <div className="image-nagia">
                   <div className="image-wrapper"><img src={imageUs} alt="us" /></div>
                   <h2>נגיע לזה :) </h2></div></PopupForm>
    </React.Fragment>)
}