import React from 'react';
import PropTypes from "prop-types";
import './PageContainer.css';

const PageContainer = ({ children }) => {
    return (
        <div className='page-container'>
            {children}
        </div>
    )
}

PageContainer.propTypes = {
    children: PropTypes.node,
}

export default PageContainer;