import React from 'react';
import PropTypes from "prop-types";

import './Slides.css';

const Slides = ({ images }) => (
    images.map((e, i) => (
        <div className='slide' key={`slide${i}`} >
            <img
                src={images[i]}
                alt='stadium'
                className='slideshow-image'
            />
        </div>
    )
    )
)

Slides.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Slides;