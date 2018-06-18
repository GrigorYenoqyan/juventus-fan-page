import React from 'react';
import PropTypes from "prop-types";
import { faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './Buttons.css';

const Buttons = ({ rightSlide, leftSlide }) => (
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


Buttons.propTypes = {
    rightSlide: PropTypes.func.isRequired,
    leftSlide: PropTypes.func.isRequired,
}

export default Buttons;