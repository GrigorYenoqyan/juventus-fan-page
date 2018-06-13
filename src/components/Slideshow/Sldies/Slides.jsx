import React from 'react';
import './Slides.css';

const Slides = (prop) => {
    const { images } = prop;

    return (
        images.map((e, i) => {
            return (
                <div className='slide' key={`slide${i}`} >
                    <img
                        src={images[i]}
                        alt='stadium'
                        className='slideshow-image'
                    />
                </div>
            )
        })
    )
}

export default Slides;