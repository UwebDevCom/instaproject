import React from 'react';
import './photoGallery.scss'

export default function photoGallery({ images }) {
    console.log(images);
    return (
        <div className='gallery-container'>
            {images.map(image =>  
                <div className='image-div' key={image._id}>    
                    <img alt={image.caption} src={image.image}/>
                </div>
            )}
        </div>
    )        
}

