import React from "react";
import PropTypes from "prop-types";
import "./FooterSocial.css";
import ContainerBlack from "../Container/ContainerBlack";
import Title from "../Text/Title"




const FooterSocialPages = ({ children, props }) => {
    return (
        <ContainerBlack>
            <Title>
               <p className="TitleFoot"> Our Social Pages </p>
            </Title>
            <ul className="social_pages_ul">
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://www.facebook.com/Juventus/" target="_blank">Facebook</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://www.instagram.com/juventus/" target="_blank">Instagram</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://www.youtube.com/juventus" target="_blank">Youtube</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://twitter.com/juventusfc" target="_blank">Twitter</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://dugout.com/video/bale-s-incredible-goal-from-the-ucl-final?v=z3cfdAHo" target="_blank">Dogout</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://www.snapchat.com/add/juventus" target="_blank">Snapchat</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="http://www.juventusound-spotify.it/" target="_blank">Spotify</a></li>
               <li className="social_pages_list_items"><a className="social_pages_ahrefs" href="https://www.linkedin.com/company/juventus-football-club/" target="_blank">Linkedin</a></li>
           </ul>
       </ContainerBlack>
    )
}



export default FooterSocialPages;