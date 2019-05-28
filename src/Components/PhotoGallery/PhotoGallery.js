import React from 'react';
import './photoGallery.scss'
import { Link } from 'react-router-dom';

export default function photoGallery({ images }) {
    console.log(images);
    return (
        <div className='gallery-container'>
            {images.map(image =>  
                <div className='image-div' key={image._id}>    
                    <Link to={`/p/${image._id}`}>
                        <div className='overlay'>
                            <div className='overlay-info'>
                                <div className='info-container'>
                                    <div className='likes'></div>
                                    <span>12</span>
                                </div>
                                <div className='info-container'>
                                    <div className='comments'></div>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                        <img alt={image.caption} src={image.image}/>
                    </Link>
                </div>
            )}
        </div>
    )        
}

