import React from 'react';
import PropTypes from "prop-types";

import './ColorContainer.css';

const ColorContainer = ({ children, color }) => {
    return (
        <div className={color === 'black' ? 'container black' : 'container white'}>
            <div className='container-center'>
                {children}
            </div>
        </div>
    )
}

ColorContainer.propTypes = {
    color: PropTypes.oneOf(["white", "black"]).isRequired,
    children: PropTypes.node.isRequired
}

export default ColorContainer;