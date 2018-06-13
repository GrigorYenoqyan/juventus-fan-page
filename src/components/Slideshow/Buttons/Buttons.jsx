import React from 'react';
import { faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './Buttons.css';

const Buttons = (prop) => {
    const { rightSlide, leftSlide } = prop;
    return (
        <div>
        <FontAwesomeIcon
            icon={faAngleRight}
            className='right slideshow-icon'
            onClick={rightSlide}
        />
        <FontAwesomeIcon
            icon={faAngleLeft}
            className='left slideshow-icon'
            onClick={leftSlide}
        />
        </div>
    )
}

export default Buttons;