import React, { useState, useEffect  }  from 'react';
import './slider.css';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';


function Slider(){  

    useEffect(() => {
        
        let imamgesSliderMainArr = [null];
    const imamgesSliderMain = document.querySelectorAll('.image-slides .fixed');
    imamgesSliderMainArr =  Array.from(imamgesSliderMain).reverse();
    let i = 0;
    setInterval(()=>{
        imamgesSliderMainArr[i].setAttribute('class','fadeIt');
        i++
        
        if (i >= imamgesSliderMainArr.length)
        {
            for (let a = 0 ; a < imamgesSliderMainArr.length ; a++) {
                imamgesSliderMainArr[a].setAttribute('class','fadeItOut');
                if (a==2){
                    imamgesSliderMainArr[a].style.opacity = 1;
                }
            }
        }
        if (i >= imamgesSliderMainArr.length) {
            i=0;
        }
        
    },4000);
  
      });

    

        const img =(
        <React.Fragment>
        <img className={'fixed'} src={slide1} alt="image" />
        <img className={'fixed'} src={slide2} alt="image" />
        <img className={'fixed'} src={slide3} alt="image" />
        <img className={'fixed'} src={slide4} alt="image" />
        </React.Fragment>
        );
        return (
            <React.Fragment>
              {img}
            </React.Fragment>
        )
}
export default Slider;