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
                            <div>
                                <span></span>
                            </div>
                            <div></div>
                        </div>
                        <img alt={image.caption} src={image.image}/>
                    </Link>
                </div>
            )}
        </div>
    )        
}

