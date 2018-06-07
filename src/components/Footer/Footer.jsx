import React from "react";
import PropTypes from "prop-types";
import "./Footer.css"


const Footer = ({ children, props }) => {
    return (
        <p className='footer_text_read'>{children}</p>
    )
}



export default Footer;