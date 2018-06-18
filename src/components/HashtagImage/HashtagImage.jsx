import React from 'react';
import PropTypes from "prop-types";
import './HashtagImage.css';

const HashtagImage = ({ data }) => {
    return (
        <div className='hashtag-image-block'>
            <img src={data.hashtagImage}
             alt='hashtagImage'
             className='hashtag-image'
             />

            <span className='hashtag'>
                {data.text}
            </span>
        </div>
    )
}


HashtagImage.propTypes = {
    data: PropTypes.shape({
        hashtagImage: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
}

export default HashtagImage;