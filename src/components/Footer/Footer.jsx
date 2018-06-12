import React from "react";
import Social from "./Social/Social";
import ColorContainer from "../ColorContainer";
import Subtitle from "../Subtitle";
import Title from "../Title";


import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <ColorContainer color='black'>
                <Subtitle color="white">Social pages of the best club</Subtitle>
                <Social />
                <Title color="white">#FINOALLAFINE</Title>
                <div className="foot-part">
                    <ul>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Cookie Policy</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <span className="copyright">© 2018 Juventus Football Club S.p.A.</span>
                </div>
            </ColorContainer>
        </div>
    )
}

export default Footer;